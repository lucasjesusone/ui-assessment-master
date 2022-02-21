/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import "./signIn.css";

export default function SignUp() {
  const { authenticated, login} = useContext(AuthContext); 
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password)
  };

  return (
    <div id="login">
      <h1>Login do sistema</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="actions">
          <button type="submit">LogIn</button>
        </div>
      </form>
    </div>
  );
}
