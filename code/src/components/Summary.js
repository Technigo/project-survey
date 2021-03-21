import React from "react";

const Summary = (props) => {
  return (
    <>
      <div className="summary-container">
        <p>
          <span>So... {props.formData.name},</span>
          <span>you like {props.formData.sushi}</span>
          <span>with {props.formData.ingredient} then?</span>
        </p>
        <p>
          Enjoy!{" "}
          <span role="img" aria-label="sushi">
            🍣
          </span>
        </p>
      </div>
    </>
  );
};

export default Summary;
