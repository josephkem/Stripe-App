import React, { useState, createContext, useEffect } from "react";
import { auth, createUserProfileDocument } from "../firebase/index";
import { onSnapshot } from "firebase/firestore";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (docSnapshot) => {
          setUser({
            id: docSnapshot.id,
            ...docSnapshot.data(),
          });
          setLoading(false);
        });
      } else {
        setUser(userAuth);
        setLoading(false);
      }
    });
    return () => unsubscribeFromAuth();
  }, []);

  const userContext = { user, loading };

  if (loading) {
    return <div>Loading . . .</div>;
  }

  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
