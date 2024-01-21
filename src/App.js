import React from "react";
import MainRoutes from "./MainRoutes";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container">
      <Header />
      <MainRoutes />
    </div>
  );
};

export default App;
