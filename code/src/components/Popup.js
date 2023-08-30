import React from 'react';

const Popup = ({ message }) => {
  return (
    <span className="form__popup__wrapper"><p className="form__popup">{message}</p>
      <span className="form__popup-tag" />
    </span>
  )
}

export default Popup;