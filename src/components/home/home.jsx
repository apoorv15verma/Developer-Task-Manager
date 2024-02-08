import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Signup from "../signup/signup";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import styles from './Home.module.css';
function home(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []); // Run the effect only once during component mount

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Home Page</h1>
      </div>

      <div className={styles.navigation}>
        <h2>
          <Link to="/login">Login</Link>
        </h2>
        <h2>
          <Link to="/signup">Signup</Link>
        </h2>
      </div>

      <div className={styles.userinfo}>
        {user ? (
          <p>Welcome, {user.displayName}! You are signed in.</p>
        ) : (
          <p className={styles.notsigned}>You are not signed in.</p>
        )}
      </div>
    </div>
  );
}
export default home;
