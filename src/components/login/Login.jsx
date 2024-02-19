import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import InputControl from "../input/Input";
import { auth } from "../../firebase";

import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [valuesLogIn, setValuesLogIn] = useState({
    email: "",
    pass: "",
  });
  const [errorMsgLogIn, setErrorMsgLogIn] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!valuesLogIn.email || !valuesLogIn.pass) {
      setErrorMsgLogIn("Fill all fields");
      return;
    }
    setErrorMsgLogIn("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, valuesLogIn.email, valuesLogIn.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        navigate("/homecomponent");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        // setErrorMsgLogIn(err.message);
        setErrorMsgLogIn("email or password is not correct");
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValuesLogIn((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValuesLogIn((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsgLogIn}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
