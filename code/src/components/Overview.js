import React from "react";

const Overview = (props) => {
  // const { name, arrayAnswer, arrayAnswer2, arrayAnswer3 } = props;

  return (
    <div className="flex-boxes">
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

      <section className="correct-answers-section">
        <h2 className="heading-two heading-answer-computer">
          Check your answers here!
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
          <span>A6:</span> True; in JS the number zero is a falsy value; the
          same as the boolean value false, empty strings, null, undefined and
          NaN.
        </p>
        <p className="highlight-text">
          <span className="highlight-span">
            Check this out in your console!
          </span>
          {/* 0 ? console.log("truthy") : console.log("falsy") */} it returns
          falsy because 0 is false!
        </p>
      </section>
    </div>
  );
};
export default Overview;

if (0) {
  console.log("0 is false");
} else {
  console.log("falsy");
}
