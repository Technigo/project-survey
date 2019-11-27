import React from "react";

export const Submit = props => {
  const { onClick, text } = props;
  return (
    <button type="submit" onClick={onClick}>
      {text}
    </button>
  );
};
