import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Person from "./components/Person";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/person" element={<Person/>}/>
    </Routes>
  );
};

export default MainRoutes;
