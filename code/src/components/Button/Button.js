import React from 'react';

import './Button.css';

const Button = (props) => {
  return (
    <button
      className={`button ${props.wrapperClassName}`}
      type={props.isSubmit ? 'submit' : 'button'}
      onClick={props.action}>
      {props.text}
    </button>
  );
};

export default Button;
