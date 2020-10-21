import React from "react";

export const Summary = ({
  name,
  lastName,
  gender,
  occupation,
  age,
  informations,
}) => {
  return (
    <>
      <div className="container">
        <h3>Your Name is: {name}</h3>
        <h3>Your Last Name is: {lastName}</h3>
        <h3>Your Gender is: {gender}</h3>
        <h3>Your Occupation is: {occupation}</h3>
        <h3>Your Age is: {age} </h3>
        <h3>Your Informations are/is from: {informations}</h3>
      </div>
    </>
  );
};
