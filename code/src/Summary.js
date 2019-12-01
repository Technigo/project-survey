import React from "react";
import "./Summary.css";

export const Summary = props => {
  console.log("props in summary:", props);

  return (
    <div className="summaryContainer">
      <div className="SummaryStyle">
        <p className="summary">Thank you for your reply {props.name} !</p>
        <p className="summary">
          {" "}
          Now I know that you are {props.size} people in {props.city}
        </p>
        <p className="summary"> with {props.benefits} benefits.</p>

        <div className="resetContainer">
          <button
            className="resetButton"
            onClick={() => window.location.reload(false)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

/*  
      


    */
