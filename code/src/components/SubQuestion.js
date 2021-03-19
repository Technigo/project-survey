import React from "react";

import "./SubQuestion.css";

export const SubQuestion = ({boxArray,setMoreFutureChoices,moreFutureChoices}) => {

  /*adds all checkbox answers to an array. Also filters out so there wont be two
  of the same object if the box is clicked twice.  */
  const handleChange = (e) => {
    moreFutureChoices.includes(e.target.name)
      ? setMoreFutureChoices(
          moreFutureChoices.filter((item) => item !== e.target.name)
        )
      : setMoreFutureChoices([e.target.name, ...moreFutureChoices]);
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
