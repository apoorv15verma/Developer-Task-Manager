import React, { useState } from "react";
import "./Header.css"; // Make sure to create a CSS file for styling
import SignupAuth from "../Auth/SignupAuth";

const Header = () => {
  const [isSignupAuthActive, setSignupAuthActive] = useState(false);

  const openLogin = () => {
    setSignupAuthActive(!isSignupAuthActive);
  };

  return (
    <>
      <SignupAuth isActive={isSignupAuthActive} />
      <header className="header">
        <div className="logo">
          <button className="logoText">
            <a>Developer Task Manager</a>
          </button>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </nav>
        <button className="Login__btn" onClick={openLogin}>
          Login
        </button>
      </header>
    </>
  );
};

export default Header;
