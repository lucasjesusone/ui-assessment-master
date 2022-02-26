import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { api, createSession, registerUser } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (recoveredUser && token) {
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await createSession(email, password);

    const loggedUser = response.data;
    const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(loggedUser);
    navigate("/notes");
  };

  const newUser = async (email,username,fullname, password) => {
    const response = await registerUser(email, username,fullname,password);
    console.log(response)
    navigate("/signIn")
  };


  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/signIn");
  };
  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, logout, loading, login, newUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
