import React from "react";

const Summ = ({
  nameInput,
  planetInput,
  experienceInput,
  weatherInput,
  degreesInput,
}) => {
  return (
    <div>
      <p>Name: {nameInput}</p>
      <p>Planet: {planetInput}</p>
      <p>Experience: {experienceInput}</p>
      <p>weatherInput: {weatherInput}</p>
      <p>weatherInput: {degreesInput}</p>
    </div>
  );
};
export default Summ;
