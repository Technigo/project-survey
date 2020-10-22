import React from "react";
import { Survey } from "./Survey";
import { Header } from "./Header";
import "./app.css";

export const App = () => {
  return (
    <div className="app__wrapper">
      <Header />
      <Survey />
    </div>
  );
};
