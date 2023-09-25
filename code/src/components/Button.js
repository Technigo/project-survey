import React from 'react';

const Button = ({ btnTxt, onClickAction }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className="btn"
      onClick={() => onClickAction()}>
      {btnTxt}
    </button>
  )
}

export default Button;
