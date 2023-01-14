import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import QuizScreen from "../pages/QuizScreen";
import Error from "../pages/Error";

const RouterPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizScreen />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RouterPath;
