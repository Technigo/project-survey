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
      <h3>First Name: {firstName}</h3>
      <h3>Last Name: {lastName}</h3>
      <h3>Gender: {gender}</h3>
      <h3>Occupation: {occupation}</h3>
      <h3>Age: {age} </h3>
      <h3>Where did you hear about us: {information}</h3>
    </div>
  );
};

export default Summary;
