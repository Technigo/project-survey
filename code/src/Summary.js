import React, { useState } from "react";
import { Gender } from "./Gender";
import { Frequency } from "./Frequency";
import { Actions } from "./Actions";
import { Suggestions } from "./Suggestions";

export const Summary = () => {
  return (
    <div className='summary-container'>
      <h1>SUMMARY</h1>
      {/* <p>Your gender is (props.gender)</p> */}
      {/* <p>You feel sad or depressed: </p>
      <p>When you feel sad you usually: {Actions}</p>
      <p>You would like to get more help: {Suggestions}</p> */}
    </div>
  );
};

export default Summary;
