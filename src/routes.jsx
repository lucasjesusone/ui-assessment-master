import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./pages/HomePage/HomePage";

import SignIn from "./pages/SignIn/signIn";

import { AuthProvider, AuthContext } from "./contexts/auth";
import NoteOverview from "./pages/Note/note-overview";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Loading....</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/home" element={<Sidebar/>} />
        <Route exact path="/login" element={<SignIn />} />
        <Route
          path="/notes"
          element={
            <Private>
              <NoteOverview />
            </Private>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
