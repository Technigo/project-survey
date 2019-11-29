import React from "react";

const Answers = ({ questions, answers }) => {
  console.log(answers);
  return (
    <div>
      <h2>Dina svar</h2>
      {answers.map((answer, index) => {
        return (
          <div className="ans" key={index}>
            <p className="ans-question">
              Fråga {index + 1}: {questions[index].text}
            </p>
            <p className="ans-answer">{answer}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Answers;
