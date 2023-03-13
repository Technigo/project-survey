import React from 'react';

export const Button = (props) => {
  return (
    <button className="ok-btn" type="button">
      {props.name}
    </button>
  );
}