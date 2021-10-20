import React, { useState } from "react";

export const Summary = ({ rootState }) => {
  return (
    <div>
      <div className="summary">
        <div>
          <h1 className="questions-main-heading">Thank you for your feedback!</h1>
          <h2 className="instructions">Check you inbox for a complimentary voucher.</h2>
          <h3 className="instructions">Your details:</h3>
          <p>Name:{rootState.name}</p>
          <p>Email:{rootState.email}</p>
          <div>
            <h3 className="instructions">Feedback summary:</h3>
            <p>Q1 answer</p>
            <p>Q2 answer</p>
            <p>Q3 answer</p>
            <p>Q4 answer</p>
            <p>Q5 answer</p>
            <p>Q6 answer</p>
            {rootState.features.soundQuality && <p>Sound quality ☑️ </p>}
            <p>Ergonomic design {rootState.features.ergonomicDesign ? "☑️" : "unchecked"}</p>
            <p>Affordability {rootState.features.affordability ? "☑️" : "unchecked"}</p>
            <p>Q7 answer: other input {rootState.featuresOthers}</p>
            <p>Q8 answer: rating {rootState.rating}</p>
            <p>Q9 answer</p>
            <p>Q10 answer</p>
          </div>
        </div>
      </div>
    </div>
  );
};
