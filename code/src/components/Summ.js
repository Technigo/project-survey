import React from "react";

const Summ = ({
  nameInput,
  planetInput,
  experienceInput,
  weatherInput,
  degreesInput,
  gradeIndex,
}) => {
  return (
    <div>
      <h2>
        Have a nice flight home
        <span role="img" aria-label="spaceship">
          🛸
        </span>{" "}
      </h2>
      <p>Name: {nameInput}</p>
      <p>From planet: {planetInput}</p>
      <p>Experience: {experienceInput}</p>
      <p>weather: {weatherInput}</p>
      <p>Your home temperature: {degreesInput} C</p>
      <p>Thank you for the {gradeIndex} stars!</p>
      {weatherInput === "Rain" || weatherInput === "Wind" ? (
        <p>Sorry about the bad weather</p>
      ) : (
        <p>Happy that you had such nice weather!</p>
      )}
      {experienceInput === "really bad" && (
        <p>Hopefully we can give you a better experience next time!</p>
      )}
      {experienceInput === "really good" && (
        <p>Nice that you liked our planet!!</p>
      )}
    </div>
  );
};
export default Summ;
