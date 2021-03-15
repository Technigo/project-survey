import React from "react";

export const Button = () => {
  const summary = () => {
    alert("yay!");
  };
  return <button onClick={summary}>Show me possible homes!</button>;
};
