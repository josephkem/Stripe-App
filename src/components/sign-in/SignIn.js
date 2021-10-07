import React, { useState } from "react";
import Layout from "../shared/Layout";
import { withRouter } from "react-router";
import { auth } from "../../firebase/index";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import "../sign-up/sign-up.styles.scss";

function SignIn({ history: { push } }) {
  const [error, setError] = useState(null);
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSignIn = async (values, { setSubmitting }) => {
    const { email, password } = values;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSubmitting(false);
      push("/shop");
    } catch (error) {
      console.log(error);
      setSubmitting(false);
      setError(error);
    }
  };

  return (
    <Layout>
      <h1>Sign In </h1>
      <div className="form-container">
        <Formik initialValues={initialValues} onSubmit={handleSignIn}>
          {({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
            const { email, password } = errors;
            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    placeholder="Email"
                    className="nomad-input"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    placeholder="Password"
                    className="nomad-input"
                  />
                </div>
                <div className="submit-btn">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button is-black npmad-btn submit"
                  >
                    Sign In
                  </button>
                </div>
                <div className="error-message">
                  {error && <p>{error.message}</p>}
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </Layout>
  );
}

export default withRouter(SignIn);
