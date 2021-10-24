import React from "react";

import "./text.css";

export const Text = (props) => {
  return (
    <>
      <h2>Name</h2>
      <div className={"text-input"}>
        <input type="text" onChange={(event) => props.setUserText(event.target.value)} />
      </div>
    </>
  );
};
