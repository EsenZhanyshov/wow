import React from "react";
import MainRoutes from "./MainRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Person from "./components/Person";
import Header__wrapper from "./components/Header__wrapper";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="container">
      <Header__wrapper />
      <MainRoutes />
      <Person/>
      <Footer />
    </div>
  );
};

export default App;
