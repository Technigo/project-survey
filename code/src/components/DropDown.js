import React from "react";
import NextButton from "./buttons-components/NextButton";

const DropDown = (props) => {
  
  return (
    <section className="dropDown-section">
      <h2 className="heading-two">All about arrays</h2>

      {/* First form */}
      <form className="drop-down">
        <label htmlFor="question1" className="label">
          What is the difference between forEach() and map() ?
        </label>
        <select
          onChange={props.onSetArrayAnswer}
          value={props.arrayAnswer}
          id="question1"
          name="question1"
          className="dropdown"
        >
          <option value="">Select the correct answer:</option>
          <option
            value=" The method forEach() returns a new array while map() always returns
            undefined."
          >
            The method forEach() returns a new array while map() always returns
            undefined.
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
        <label htmlFor="question2" className="label">
          What is the difference between find() and filter() ?
        </label>
        <select
          onChange={props.onSetArrayAnswer2}
          value={props.arrayAnswer2}
          id="question2"
          name="question2"
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
        <label htmlFor="question3" className="label">
          What is the difference between push() and pop() ?
        </label>
        <select
          onChange={props.onSetArrayAnswer3}
          value={props.arrayAnswer3}
          id="question3"
          name="question3"
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
            The push() method adds new items to the beginning of an array
            whereas the pop() method removes the first item from an array.
          </option>
        </select>
      </form>

      <NextButton onStepChange={props.onStepChange} />
    </section>
  );
};
export default DropDown;
