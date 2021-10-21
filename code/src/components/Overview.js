import React from "react";

const Overview = (props) => {
  // const { name, arrayAnswer, arrayAnswer2, arrayAnswer3 } = props;

  return (
    <>
      <section className="overview-section">
        <h2 className="heading-two heading-answer-user">Here are your answers {props.name}!</h2>
        <h3 className="user-question">
          Q1: What is the difference between forEach() and map() ?
        </h3>
        <p>{props.arrayAnswer}</p>
        <h3 className="user-question">
          Q2:  What is the difference between find() and filter() ?
        </h3>
        <p>{props.arrayAnswer2}</p>
        <h3 className="user-question">
          Q3: What is the difference between push() and pop() ?
        </h3>
        <p>{props.arrayAnswer3}</p>
      </section>

      <section className="correct-answers-section">
        <h2 className="heading-two heading-answer-computer">Check your answers here!</h2>
        <p className="correct-answer">
          <span>A1:</span> The method forEach() returns undefinded while map() returns a new
          array.
        </p>
        <p className="correct-answer">
          <span>A2:</span> The find() method returns the value of the first element whereas
          filter() returns an array containing all the array elements.
        </p>
        <p className="correct-answer">
          <span>A3:</span>The push() method adds new items to the end an array whereas the
          pop() method removes the last item from an array.
        </p>
      </section>
    </>
  );
};
export default Overview;
