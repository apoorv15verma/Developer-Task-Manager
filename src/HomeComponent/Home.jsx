// Home.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Home = () => {
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
  }, [setUser]); // Include setUser in the dependency array

  const mainuser= user?.displayName;

  return (
    <>
      <h1>Welcome, {mainuser}</h1>

      <div className={styles.home}>
        <Link to="/resumeApp">
          <div className={styles.card}>
            <h2 className="fw-semibold">Resume App</h2>
            <p>Make your Job Ready Resume.</p>
          </div>
        </Link>

        <Link to="/todoApp">
          <div className={styles.card}>
            <h2>Todo App</h2>
            <p>Make your Todo list.</p>
          </div>
        </Link>

        <Link to="/notesApp">
          <div className={styles.card}>
            <h2>Notes App</h2>
            <p>Make Yor Notes.</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
