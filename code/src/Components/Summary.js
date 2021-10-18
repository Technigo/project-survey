import { useState } from "react";
import React from "react";
import Form from "Components/Form";
import FirstQuestion from "Components/FirstQuestion";
import SecondQuestion from "Components/SecondQuestion";
import ThirdQuestion from "Components/ThirdQuestion";

const Summary = () => {
  return (
    <div className="QuestionContainer">
      <h2>Your answers</h2>
      <p className="questionSummary">Q1 : </p>
      <p className="questionSummary">Q2 : </p>
      <p className="questionSummary">Q3 : </p>
    </div>
  );
};

export default Summary;
