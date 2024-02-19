// import { useState,useEffect } from "react";
// import React from "react";
// import "./Auth.css";
// import { Link, useNavigate } from "react-router-dom";

// // login
// import { signInWithEmailAndPassword } from "firebase/auth";

// // signup
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// // both login and signup
// import { auth } from "../firebase";

// import { onAuthStateChanged } from "firebase/auth";

// const SignupAuth = ({ isActive }) => {
//   // for rotate the signup card
//   const [isCardFlipped, setCardFlipped] = useState(false);

//   // for router
//   const navigate = useNavigate();

//   // signup functions

//   const [valuesSignUp, setValuesSignUp] = useState({
//     name: "",
//     email: "",
//     pass: "",
//   });

//   const [errormsgSignUp, setErrormsgSignUp] = useState("");

//   const handleSubmissionOnSignup = () => {
//     if (!valuesSignUp.name || !valuesSignUp.email || !valuesSignUp.pass) {
//       setErrormsgSignUp("Fill all fields");
//       return;
//     }
//     setErrormsgSignUp("");

//     createUserWithEmailAndPassword(auth, valuesSignUp.email, valuesSignUp.pass)
//       .then(async (res) => {
//         const user = res.user;
//         await updateProfile(user, {
//           displayName: valuesSignUp.name,
//         });
//         navigate("/");
//         console.log("User created:", user);

//         // You can redirect to login page
//         event.preventDefault();
//         setCardFlipped(!isCardFlipped);
//       })
//       .catch((err) => {
//         setErrormsgSignUp(err.message);
//         console.error("Signup error:", err.message);
//       });
//   };

//   // login functions
//   const [valuesLogIn, setValuesLogIn] = useState({
//     email: "",
//     pass: "",
//   });
//   const [errorMsgLogIn, setErrorMsgLogIn] = useState("");
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

//   const handleSubmission = () => {
//     if (!valuesLogIn.email || !valuesLogIn.pass) {
//       setErrorMsgLogIn("Fill all fields");
//       return;
//     }
//     setErrorMsgLogIn("");

//     setSubmitButtonDisabled(true);
//     signInWithEmailAndPassword(auth, valuesLogIn.email, valuesLogIn.pass)
//       .then(async (res) => {
//         setSubmitButtonDisabled(false);

//         navigate("/homecomponent");
//       })
//       .catch((err) => {
//         setSubmitButtonDisabled(false);
//         // setErrorMsgLogIn(err.message);
//         setErrorMsgLogIn("email or password is not correct");
//       });
//   };

//   const rotate = () => {
//     event.preventDefault();
//     setCardFlipped(!isCardFlipped);
//   };


//   // for homepage

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in
//         setUser(user);
//       } else {
//         // User is signed out
//         setUser(null);
//       }
//     });

//     // Cleanup the subscription when the component unmounts
//     return () => unsubscribe();
//   }, []); // Run the effect only once during component mount


//   return (
//     <>
//       <div
//         className={`wrapper ${isCardFlipped ? "flipped" : ""} ${
//           isActive ? "active" : ""
//         }`}
//         style={{ top: "6rem", right: "9rem", zIndex: "10" }}
//       >
//         <div className="flip-card__inner">
//           <div className="flip-card__front">
//             <div className="title">Log in</div>
//             <form action="" className="flip-card__form">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 name="email"
//                 className="flip-card__input"
//                 onChange={(event) =>
//                   setValuesLogIn((prev) => ({
//                     ...prev,
//                     email: event.target.value,
//                   }))
//                 }
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 className="flip-card__input"
//                 onChange={(event) =>
//                   setValuesLogIn((prev) => ({
//                     ...prev,
//                     pass: event.target.value,
//                   }))
//                 }
//               />
//               <p>
//                 Don't have an account?{" "}
//                 <a href="" onClick={rotate}>
//                   Signup
//                 </a>
//               </p>
//               <b>{errorMsgLogIn}</b>

//               <button
//                 className="flip-card__btn"
//                 disabled={submitButtonDisabled}
//                 onClick={handleSubmission}
//               >
//                 Log in
//               </button>
//             </form>
//           </div>
//           <div className="flip-card__back">
//             <div className="title">Sign up</div>
//             <form action="" className="flip-card__form">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="flip-card__input"
//                 onChange={(event) =>
//                   setValuesSignUp((prev) => ({
//                     ...prev,
//                     name: event.target.value,
//                   }))
//                 }
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 name="email"
//                 className="flip-card__input"
//                 onChange={(event) =>
//                   setValuesSignUp((prev) => ({
//                     ...prev,
//                     email: event.target.value,
//                   }))
//                 }
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 className="flip-card__input"
//                 onChange={(event) =>
//                   setValuesSignUp((prev) => ({
//                     ...prev,
//                     pass: event.target.value,
//                   }))
//                 }
//               />
//               <p>
//                 Already have an account? <span onClick={rotate}>Login</span>
//               </p>
//               <b>{errormsgSignUp}</b>
//               <button
//                 className="flip-card__btn"
//                 onClick={handleSubmissionOnSignup}
//               >
//                Signup
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default SignupAuth;



import { useState, useEffect } from "react";
import React from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";

// login
import { signInWithEmailAndPassword } from "firebase/auth";

// signup
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// both login and signup
import { auth } from "../firebase";

import { onAuthStateChanged } from "firebase/auth";

const SignupAuth = ({ isActive }) => {
  // for rotate the signup card
  const [isCardFlipped, setCardFlipped] = useState(false);

  // for router
  const navigate = useNavigate();

  // signup functions
  const [valuesSignUp, setValuesSignUp] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errormsgSignUp, setErrormsgSignUp] = useState("");

  const handleSubmissionOnSignup = (event) => {
    event.preventDefault();

    if (!valuesSignUp.name || !valuesSignUp.email || !valuesSignUp.pass) {
      setErrormsgSignUp("Fill all fields");
      return;
    }
    setErrormsgSignUp("");

    createUserWithEmailAndPassword(auth, valuesSignUp.email, valuesSignUp.pass)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: valuesSignUp.name,
        });
        navigate("/");
        console.log("User created:", user);

        // You can redirect to login page
        setCardFlipped(!isCardFlipped);
      })
      .catch((err) => {
        setErrormsgSignUp(err.message);
        console.error("Signup error:", err.message);
      });
  };

  // login functions
  const [valuesLogIn, setValuesLogIn] = useState({
    email: "",
    pass: "",
  });

  const [errorMsgLogIn, setErrorMsgLogIn] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = (event) => {
    event.preventDefault();

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

        // now close the login button
      

      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsgLogIn("email or password is not correct");
      });
  };

  const rotate = (event) => {
    event.preventDefault();
    setCardFlipped(!isCardFlipped);
  };

  // for homepage
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        // setUser(user); // Uncomment if you have a setUser function
      } else {
        // User is signed out
        // setUser(null); // Uncomment if you have a setUser function
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []); // Run the effect only once during component mount

  return (
    <>
      <div
        className={`wrapper ${isCardFlipped ? "flipped" : ""} ${
          isActive ? "active" : ""
        }`}
        style={{ top: "6rem", right: "9rem", zIndex: "10" }}
      >
        <div className="flip-card__inner">
          <div className="flip-card__front">
            <div className="title">Log in</div>
            <form onSubmit={handleSubmission} className="flip-card__form">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="flip-card__input"
                onChange={(event) =>
                  setValuesLogIn((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }))
                }
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="flip-card__input"
                onChange={(event) =>
                  setValuesLogIn((prev) => ({
                    ...prev,
                    pass: event.target.value,
                  }))
                }
              />
              <p className="have">
                Don't have an account?{" "}
                <button type="button" onClick={rotate}>
                  Signup
                </button>
              </p>
              <b>{errorMsgLogIn}</b>
              <button
                type="submit"
                className="flip-card__btn"
                disabled={submitButtonDisabled}
               
              >
                Log in
              </button>
            </form>
          </div>
          <div className="flip-card__back">
            <div className="title">Sign up</div>
            <form onSubmit={handleSubmissionOnSignup} className="flip-card__form">
              <input
                type="text"
                placeholder="Name"
                className="flip-card__input"
                onChange={(event) =>
                  setValuesSignUp((prev) => ({
                    ...prev,
                    name: event.target.value,
                  }))
                }
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="flip-card__input"
                onChange={(event) =>
                  setValuesSignUp((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }))
                }
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="flip-card__input"
                onChange={(event) =>
                  setValuesSignUp((prev) => ({
                    ...prev,
                    pass: event.target.value,
                  }))
                }
              />
              <p className="have">
                Already have an account?{" "}
                <button type="button" onClick={rotate}>
                  Login
                </button>
              </p>
              <b>{errormsgSignUp}</b>
              <button type="submit" className="flip-card__btn">
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupAuth;
