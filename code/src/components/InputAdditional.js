import React from "react";

export const InputAdditional = (props) => {
  return (
    <div className="each-question">
      Type in additonal things you want (fireplace, balcony etc.):
      <input
        type="text"
        onChange={props.onAdditionalChange}
        // value={additional}
      />
    </div>
  );
};
