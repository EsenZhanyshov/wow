import React from "react";
import MainRoutes from "./MainRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Person from "./components/Person";

const App = () => {
  return (
    <div className="container">
      <Header />
      <MainRoutes />
      <Person/>
      <Footer />
    </div>
  );
};

export default App;
