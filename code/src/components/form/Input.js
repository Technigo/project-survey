import React from 'react';

export const Input = props => {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        className={props.error ? 'invalid-input' : 'valid-input'}
        id={props.name}
        name={props.name}
        value={props.value || ''}
        type="text"
        placeholder={props.placeholder}
        onBlur={props.handleInputBlur}
        onChange={props.handleInputChange}
        required
      />
      <div className="input-sub-details">
        {props.error && <p className="error">{props.error}</p>}
        {props.count > 0 && <p className="counter">{props.count}/25</p>}
      </div>
    </div>
  );
};
