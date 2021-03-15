import React, { useState } from "react";

export const FormAdditional = (props) => {
  const [additional, setAdditional] = useState("");

  return (
    <div className="each-question">
      <form onSubmit={(event) => event.preventDefault()}>
        Type in additonal things you want (fireplace, balcony etc.):
        <input
          type="text"
          onChange={(event) => setAdditional(event.target.value)}
          value={additional}
        />
        {/* <button onClick={onCounterIncrease}>Choose</button> */}
      </form>
    </div>
  );
};
