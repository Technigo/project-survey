import React from 'react';

const Popup = ({ message }) => {
  return (
    <span className="form__popup__wrapper"><span className="form__popup-tag" /><p className="form__popup">{message}</p>
    </span>
  )
}

export default Popup;