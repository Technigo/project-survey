import React, { useState } from "react";

const DropDown = (props) => {

//   const { arrayAnswer, onSetArrayAnswer } = props;
//   const { arrayAnswer2, onSetArrayAnswer2 } = props;
//   const { arrayAnswer3, onSetArrayAnswer3, onStepChange } = props;

  return (
    <main className="main">
      <section className="questions-section">
        <h2 className="heading-two">All about arrays</h2>
        <form className="drop-down">
          <label htmlFor="array-question" className="label-dropdown">
            What is the difference between forEach() and map() ?
          </label>
          <select
            onChange={props.onSetArrayAnswer}
            value={props.arrayAnswer}
            id="array-question"
            name="array-question"
            className="dropdown"
          >
            <option value="">Select the correct answer:</option>
            <option
              value=" The method forEach() returns a new array while map() always returns
            undefined."
            >
              The method forEach() returns a new array while map() always
              returns undefined.
            </option>
            <option
              value="The method forEach() returns undefinded while map() returns a new
            array."
            >
              The method forEach() returns undefinded while map() returns a new
              array.
            </option>
          </select>
        </form>

        {/* Second form */}
        <form className="drop-down">
          <label htmlFor="array-question" className="label-dropdown">
            What is the difference between find() and filter() ?
          </label>
          <select
            onChange={props.onSetArrayAnswer2}
            value={props.arrayAnswer2}
            id="array-question"
            name="array-question"
            className="dropdown"
          >
            <option value="">Select the correct answer:</option>
            <option
              value="The find() method returns the value of the first element whereas
            filter() returns an array containing all the array elements."
            >
              The find() method returns the value of the first element whereas
              filter() returns an array containing all the array elements.
            </option>
            <option
              value="The filter() method returns the value of the first element whereas
            find() returns an array containing all the array elements."
            >
              The filter() method returns the value of the first element whereas
              find() returns an array containing all the array elements.
            </option>
          </select>
        </form>

        {/* Third form */}
        <form className="drop-down">
          <label htmlFor="array-question" className="label-dropdown">
            What is the difference between push() and pop() ?
          </label>
          <select
            onChange={props.onSetArrayAnswer3}
            value={props.arrayAnswer3}
            id="array-question"
            name="array-question"
            className="dropdown"
          >
            <option value="">Select the correct answer:</option>
            <option value="The push() method adds new items to the end an array whereas the pop() method removes the last item from an array.">
              The push() method adds new items to the end an array whereas the
              pop() method removes the last item from an array.
            </option>
            <option
              value=" The push() method adds new items to the beginning of an array whereas the
              pop() method removes the first item from an array."
            >
              The push() method adds new items to the beginning of an array whereas the
              pop() method removes the first item from an array.
            </option>
          </select>
        </form>
        <button className="next-btn" onClick={props.onStepChange}>
          Next
        </button>
      </section>
    </main>
  );
};
export default DropDown;
