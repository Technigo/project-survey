//Question 5
import React from "react";

const Answers = ({ name, food, game, email, snack, licoriceCandy, drink }) => {
  return (
    <div className="container">
      <div className="fifthQuestion">
        <h1>That's it, well done!🎈 </h1>
        <h2>Your answers in the form were:</h2>
        <p>{name}</p>
        <p>{food}</p>
        <p>{game}</p>
        <p>{snack}</p>
        <p>{licoriceCandy}</p>
        <p>{drink}</p>
        {email === true && (
          <p>An email with your answers will also be sent to you. </p>
        )}
      </div>
    </div>
  );
};

export default Answers;
