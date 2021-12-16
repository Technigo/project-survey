import React from "react";
import Header from "./Components/Header";
import Create from "./Components/Create";

export const App = () => {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>

      <div className="create">
        <Create />
      </div>
    </div>
  );
};
