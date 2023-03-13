import React from 'react';

const Button = (props) => {
  return (
    <button className="yes-btn" type="button">
      {props.name}
    </button>
  );
}

export default Button;