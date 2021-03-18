import React from "react";

export const SubQuestion = ({ boxArray, setMoreFutureChoices,  moreFutureChoices}) => {
 
  const handleChange = (e) => {
    setMoreFutureChoices(moreFutureChoices+= `${e.target.value}, `)
console.log(moreFutureChoices)  };

  return (
    <form className="sub-question">
      {boxArray.map((box) => (
        <label htmlFor={box}>
          <input type="checkbox" id={box} value={box} onChange={handleChange} />
          {box}
        </label>
      ))}
    </form>
  );
};
