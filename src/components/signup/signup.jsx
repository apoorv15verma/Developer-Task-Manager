// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// import InputControl from "../input/Input";
// import { auth } from "../../firebase";

// import styles from "./Signup.module.css";

// function Signup() {

//     const [values,setValues]=useState({
//         name:"",
//         email:"",
//         pass:"",
//     })

//     const [errorMsg,setErrorMsg]=useState("");
     
//     const handleSubmission=()=>{
//         if (!values.name || !values.email || !values.pass ) {
//             setErrorMsg(`You have not filled all inputs`)
//         }else{
//             setErrorMsg("")
//         }

//         createUserWithEmailAndPassword(auth)
        
//         console.log(values);
//     }
    

// //   const navigate = useNavigate();
// //   const [values, setValues] = useState({
// //     name: "",
// //     email: "",
// //     pass: "",
// //   });
// //   const [errorMsg, setErrorMsg] = useState("");
// //   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

// //   const handleSubmission = () => {
// //     if (!values.name || !values.email || !values.pass) {
// //       setErrorMsg("Fill all fields");
// //       return;
// //     }
// //     setErrorMsg("");

// //     setSubmitButtonDisabled(true);
// //     createUserWithEmailAndPassword(auth, values.email, values.pass)
// //       .then(async (res) => {
// //         setSubmitButtonDisabled(false);
// //         const user = res.user;
// //         await updateProfile(user, {
// //           displayName: values.name,
// //         });
// //         navigate("/");
// //       })
// //       .catch((err) => {
// //         setSubmitButtonDisabled(false);
// //         setErrorMsg(err.message);
// //       });
// //   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.innerBox}>
//         <h1 className={styles.heading}>Signup</h1>

//         <InputControl
//           label="Name"
//           placeholder="Enter your name"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, name: event.target.value }))
//           }
//         />
//         <InputControl
//           label="Email"
//           placeholder="Enter email address"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, email: event.target.value }))
//           }
//         />
//         <InputControl
//           label="Password"
//           placeholder="Enter password"
//           onChange={(event) =>
//             setValues((prev) => ({ ...prev, pass: event.target.value }))
//           }
//         />

//         <div className={styles.footer}>
//           <b className={styles.error}>{errorMsg}</b>
//           <button onClick={handleSubmission} 
//         //   disabled={submitButtonDisabled}
//           >
//             Signup
//           </button>
//           <p>
//             Already have an account?{" "}
//             <span>
//               <Link to="/login">Login</Link>
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;



import React, { useState } from "react";

import { Link,useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "../input/Input";
import { auth } from "../../firebase";

import styles from "./Signup.module.css";

function Signup() {
  const navigate=useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    createUserWithEmailAndPassword(auth, values.email, values.pass)
  .then(async (res) => {
    const user = res.user;
    await updateProfile(user, {
      displayName: values.name,
    });
    navigate('/')
    console.log("User created:", user);

    // You can redirect to another page or perform additional actions here
  })
  .catch((err) => {
    setErrorMsg(err.message);
    console.error("Signup error:", err.message);
  });
  };


  
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     pass: "",
//   });
//   const [errorMsg, setErrorMsg] = useState("");
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

//   const handleSubmission = () => {
//     if (!values.name || !values.email || !values.pass) {
//       setErrorMsg("Fill all fields");
//       return;
//     }
//     setErrorMsg("");

//     setSubmitButtonDisabled(true);
//     createUserWithEmailAndPassword(auth, values.email, values.pass)
//       .then(async (res) => {
//         setSubmitButtonDisabled(false);
//         const user = res.user;
//         await updateProfile(user, {
//           displayName: values.name,
//         });
//         navigate("/");
//       })
//       .catch((err) => {
//         setSubmitButtonDisabled(false);
//         setErrorMsg(err.message);
//       });
//   };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission}>Signup</button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
