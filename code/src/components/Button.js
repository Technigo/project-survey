import React from 'react';

const Button = (props) => {
  return (
    <button className="ok-btn" type="button">
      {props.name}
    </button>
  );
}
export default Button;