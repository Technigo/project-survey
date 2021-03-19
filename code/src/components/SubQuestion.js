import React from "react";

import "./SubQuestion.css";

export const SubQuestion = ({boxArray,setMoreFutureChoices,moreFutureChoices}) => {

  /*function to add all checked checkbox choices to a string. Also checks if the user unchecked 
 a box and removes the answer from the string if this is true */
  const handleChange = (e) => {
    e.target.checked
      ? setMoreFutureChoices((moreFutureChoices += `${e.target.name}, `))
      : setMoreFutureChoices(
          moreFutureChoices.replace(`${e.target.name}, `, "")
        );
  };

  return (
    <form className="sub-question">
      {boxArray.map((box) => (
        <label htmlFor={box} key={box}>
          <input type="checkbox" id={box} name={box} onChange={handleChange} />
          {box}
        </label>
      ))}
    </form>
  );
};
