import React from "react";

const Summary = ({
  firstName,
  lastName,
  gender,
  occupation,
  age,
  information,
}) => {
  return (
    <div className="container">
      <h3>Your Name is: {firstName}</h3>
      <h3>Your Last Name is: {lastName}</h3>
      <h3>Your Gender is: {gender}</h3>
      <h3>Your Occupation is: {occupation}</h3>
      <h3>Your Age is: {age} </h3>
      <h3>Your Informations are/is from: {information}</h3>
    </div>
  );
};

export default Summary;
