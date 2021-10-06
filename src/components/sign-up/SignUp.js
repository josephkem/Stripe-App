import React from "react";
import Layout from "../shared/Layout";
import "sign-up.styles.scss";

function SignUp() {
  const initialValues = {
    firstname: "",
    email: "",
    password: "",
  };
  return (
    <Layout>
      <div className="sign-up">
        <h1>Sign Up</h1>
        <div className="form-container"></div>
      </div>
    </Layout>
  );
}

export default SignUp;
