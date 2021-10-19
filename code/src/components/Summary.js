import React from "react";

import Arrows from "./Arrows";

const Summary = ({
  name,
  experience,
  theatreVisits,
  rating,
  question,
  setQuestion,
}) => {
  return (
    <div className="hero-image">
      <div className="content-wrapper">
        <h1>SUMMARY:</h1>
        <p>Name: {name}</p>
        <p>VR Experience: {experience}</p>
        <p>How often you visit theatre: {theatreVisits}</p>
        <p>Rating for this play: {rating}</p>
        <Arrows question={question} setQuestion={setQuestion} />
      </div>
    </div>
  );
};

export default Summary;
