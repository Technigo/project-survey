import React, { useState } from "react";

export const Welcome = ({ moveOn }) => {
  return (
    <div>
      <h1>WAVES X3</h1>
      <p>Thank you for shopping with us!</p>
      <p>Your feedback drives change!</p>
      <button onClick={moveOn}>Give a Feedback</button>
    </div>
  );
};
