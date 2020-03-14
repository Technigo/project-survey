import React, { useState } from "react";
import "./app.css";
import { FormQ } from "./FormQ";
import { DropDownQ } from "./DropDownQ";
import { RadioButtonQ } from "./RadioButtonQ";
export const App = () => {
  let [question, setQuestion] = useState("Question1");

  return (
    <section className="surveyContainer">
      {question === "Question1" && (
        <section className="questionContainer">
          <FormQ />

          <button onClick={event => setQuestion("Question2")}>
            Next question
          </button>
        </section>
      )}
      {question === "Question2" && (
        <section className="questionContainer">
          <DropDownQ />
          <button onClick={event => setQuestion("Question3")}>
            Next question
          </button>
        </section>
      )}
      {question === "Question3" && (
        <section className="questionContainer">
          <RadioButtonQ />
          <button onClick={event => setQuestion("Question4")}>
            Next question
          </button>
        </section>
      )}
      {/* {question === "Question4" && (

      )} */}
    </section>
  );
};
