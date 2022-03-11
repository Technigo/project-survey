import React from "react";

const UserAnswers = (props) => {
  return (
    <section className="overview-section">
      <h2 className="heading-two heading-answer-user">
        Here are your answers {props.name}!
      </h2>
      <h3 className="user-question">
        Q1: What is the difference between forEach() and map() ?
      </h3>
      <p>{props.arrayAnswer}</p>
      <h3 className="user-question">
        Q2: What is the difference between find() and filter() ?
      </h3>
      <p>{props.arrayAnswer2}</p>
      <h3 className="user-question">
        Q3: What is the difference between push() and pop() ?
      </h3>
      <p>{props.arrayAnswer3}</p>
      <h3 className="user-question">
        Q4: A parameter is the value inside the function once is invoked.
      </h3>
      <p>{props.trueOrFalse}</p>
      <h3 className="user-question">
        Q5: Variables that start with const can not be reassigned.
      </h3>
      <p>{props.trueOrFalse2}</p>
      <h3 className="user-question">
        Q5: In JavaScript, the number zero is considered a falsy value.
      </h3>
      <p>{props.trueOrFalse3}</p>
    </section>
  );
};
export default UserAnswers;
