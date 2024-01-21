import React from "react";
import MainRoutes from "./MainRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
