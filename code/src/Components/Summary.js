import { useState } from "react";
import React from "react";
import Form from "Components/Form";
import FirstQuestion from "Components/FirstQuestion";
import SecondQuestion from "Components/SecondQuestion";
import ThirdQuestion from "Components/ThirdQuestion";

const Summary = () => {
  return (
    <div>
      <h2>Your answers</h2>
      <p>Q1 : </p>
      <p>Q2 : </p>
      <p>Q3 : </p>
    </div>
  );
};

export default Summary;
