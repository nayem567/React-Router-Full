import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../context/UserContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  // React-Toastify
  const notifyError = () => {
    toast.error("Wrong Credentials!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "nayem@gmail.com" && password === "1234") {
      const user = {
        name: "Nayem",
        email: "nayem@gmail.com",
        city: "Sylhet",
        country: "Bangladesh",
      };
      setUser(user);
      navigate("/dashboard/user/profile", { state: user });
    } else {
      notifyError();
    }
  };

  return (
    <div className="signIn-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      {/* React-Toastify */}
      <ToastContainer autoClose={2000} theme="dark" />
    </div>
  );
};

export default SignIn;
