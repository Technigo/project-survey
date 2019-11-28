import React from "react";
import "./Summary.css";

export const Summary = props => {
  console.log("props in summary:", props);

  return (
    <div className="SummaryStyle">
      <p className="summary">Thank you for your reply {props.name} !</p>
      <p className="summary">
        {" "}
        Now I know that you are {props.size} people in {props.city}.
      </p>
    </div>
  );
};

/*  
      


    */
