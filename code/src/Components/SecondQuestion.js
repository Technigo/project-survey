import { useState } from "react";
import React from "react";

const SecondQuestion = () => {
  const [question, setQuestion] = useState("");
  return (
    <div className="QuestionContainer">
      <p className="textQuestion">
        What is your programming language of choice?
      </p>
      <div className="selectContainer">
        <form>
          <select
            onChange={(event) => setQuestion(event.target.value)}
            value={question}
          >
            <option>Javascript</option>
            <option>C++</option>
            <option>Java</option>
            <option>Python</option>
            <option>PHP</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default SecondQuestion;
