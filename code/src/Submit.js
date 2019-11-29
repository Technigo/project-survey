import React from "react";

export const Submit = props => {
  const { onClick, text, className } = props;
  return (
    <button type="submit" onClick={onClick} className={className}>
      {text}
    </button>
  );
};
