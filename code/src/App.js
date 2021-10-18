import React from "react";
import Form from "./Components/Form";
import FirstQuestion from "Components/FirstQuestion";
import SecondQuestion from "Components/SecondQuestion";
import ThirdQuestion from "Components/ThirdQuestion";
import Summary from "Components/Summary";

export const App = () => {
  return (
    <div>
      <h1 className="headerText">My survey</h1>
      <Form />
    </div>
  );
};
