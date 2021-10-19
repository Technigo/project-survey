import React, { useState } from "react";

export const Welcome = ({ moveOn }) => {
  return (
    <div className="container">
      <div className="card welcome">
        <h1>WAVES X3</h1>
        <p>Thank you for shopping with us!</p>
        <p>Your feedback drives change!</p>
        <button className="give-btn" onClick={moveOn}>
          give feedback
        </button>
      </div>
    </div>
  );
};
