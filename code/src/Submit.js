import React from "react";

export const Submit = props => {
  const { onClick } = props;
  return (
    <button type="submit" onClick={onClick}>
      Submit
    </button>
  );
};
