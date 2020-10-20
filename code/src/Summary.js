import React from "react";

export const Summary = (data) => {
  return (
    <>
      <div className="container">
        <h3>Your Name is: {data.name}</h3>
        <h3>Your Last Name is: {data.lastName}</h3>
        <h3>Your Gender is: {data.gender}</h3>
        <h3>Your Occupation is: {data.occupation}</h3>
        <h3>Your Age is: </h3>
      </div>
    </>
  );
};
