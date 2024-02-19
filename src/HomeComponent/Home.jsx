// Home.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

import todoimg from "../assets/flat-lay-notebook-with-list-desk.jpg";
import Cards from "./Cards";


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

  const mainuser = user?.displayName;

  return (
    
    <>
    
    <div className="homeContainer">

      <h1 className="pageTitle" style={{fontSize:"5rem"}}  >Welcome {mainuser}</h1>
      <div className="cards" style={{padding:"2rem",display:"flex",justifyContent:"center",flexWrap:"wrap",marginLeft:"14rem",marginRight:"14rem"}} >

      <Link to="/todoApp" >
       <Cards img={todoimg} Heading={"TODO LIST"} Content={"hellloooo"}/>
       </Link>

       <Link to="/resumeApp">
       <Cards img={todoimg} Heading={"RESUME BUILDER"} Content={"hellloooo"}/>
       </Link>

       <Link to="/notesApp">
       <Cards img={todoimg} Heading={"NOTES APP"} Content={"hellloooo"}/>
       </Link>

       
      </div>
    </div>
      
    </>
  );
};

export default Home;
