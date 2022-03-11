import React from "react";

const CorrectAnswers = () => {
  return (
    <section className="correct-answers-section">
      <h2 className="heading-two heading-answer-computer">
        Here are the correct answers!
      </h2>
      <p className="correct-answer">
        <span>A1:</span> The method forEach() returns undefinded while map()
        returns a new array.
      </p>
      <p className="correct-answer">
        <span>A2:</span> The find() method returns the value of the first
        element whereas filter() returns an array containing all the array
        elements.
      </p>
      <p className="highlight-text">
        <span className="highlight-span">Remember it this way!</span>
        The find() method returns just Maxsymilian's cheese sandwich while the
        filter() method returns the bag with all type of sandwiches!
      </p>

      <p className="correct-answer">
        <span>A3:</span>The push() method adds new items to the end an array
        whereas the pop() method removes the last item from an array.
      </p>

      <p className="correct-answer">
        <span>A4:</span>False; a parameter is the value inside a function once
        is declared and an argument is the value inside a function once is
        invoked.
      </p>

      <p className="correct-answer">
        <span>A5:</span>True; variables that start with const can not be
        reassigned but variables that start with let can.
      </p>

      <p className="correct-answer">
        <span>A6:</span> True; in JS the number zero is a falsy value; the same
        as the boolean value false, empty strings, null, undefined and NaN.
      </p>
    </section>
  );
};
export default CorrectAnswers;
