import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [signIn, setSignIn] = useState(false);

  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <header>
      <div className="logo-container">
        <a className="logo-brand" onClick={handleGoToHome}>
          My App
        </a>
      </div>
      <nav className="navbar-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {signIn && (
            <>
              <li>
                <Link to="/signout" onClick={() => setSignIn(false)}>
                  Sign Out
                </Link>
              </li>
            </>
          )}
          {!signIn && (
            <>
              <li>
                <Link to="/signin" onClick={() => setSignIn(true)}>
                  Sign In
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
