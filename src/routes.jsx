import React, { useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { AuthProvider, AuthContext } from "./contexts/auth";
import { NoteOverview } from "./pages/Note/note-list/note-overview";

import Navbar from "./pages/HomePage/HomePage";
import SignIn from "./pages/SignIn/signIn";
import SignUp from "./pages/SignUp/signUp";
import LightTheme from "./../src/Themes/Light";
import DarkTheme from "./../src/Themes/Dark";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.bgcolor};
    min-height: 100vh;
    margin:0;
    padding:0;
    box-sizing:border-box;
    color: ${(props) => props.color}
  }
`;

const AppRoutes = () => {
  const [theme, setTheme] = useState(LightTheme);

  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Loading....</div>;
    }

    if (!authenticated) {
      return <Navigate to="/signIn" />;
    }

    return children;
  };

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((state) => (state.id === "light" ? DarkTheme : LightTheme));
        },
      }}
    >
      <GlobalStyle bgcolor={theme.background} color={theme.color} />
      <AuthProvider>
        <Routes>
          {/* <Route
            exact
            path="/home"
            element={
              <Private>
                <Navbar />
              </Private>
            }
          /> */}
          <Route exact path="/signIn" element={<SignIn />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route
            path="/notes"
            element={
              <Private>
                <NoteOverview />
              </Private>
            }
          />
          <Route
            path="/"
            element={
              <Private>
                <Navigate replace to="/signIn" />
              </Private>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default AppRoutes;
