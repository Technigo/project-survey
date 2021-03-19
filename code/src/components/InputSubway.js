import React from "react";

export const InputSubway = (props) => {
  return (
    <div className="each-question">
      <label>
        It's important that I am close to public transportation:
        <input
          type="checkbox"
          checked={props.subway}
          onChange={props.onSubwayChange}
        />
        Yes
      </label>
    </div>
  );
};
