import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-h5-audio-player/lib/styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import RequireAuth from "./auth/RequireAuth";
import AppLayout from "./layout/AppLayout";
import LoggedInAuth from "./auth/LoggedInAuth";
import LoginPage from "./page/LoginPage/LoginPage";
import SignUpPage from "./page/SignUpPage/SignUpPage";
import RecommendedPage from "./page/RecommendedPage";
import TrendingPage from "./page/TrendingPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <AppLayout />
            </RequireAuth>
          }
        >
          <Route index element={<Home />} />
          <Route path="recommended" element={<RecommendedPage />} />
          <Route path="trending" element={<TrendingPage />} />
        </Route>

        <Route
          path="/login"
          element={
            <LoggedInAuth>
              <LoginPage />
            </LoggedInAuth>
          }
        />
        <Route
          path="/signup"
          element={
            <LoggedInAuth>
              <SignUpPage />
            </LoggedInAuth>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
