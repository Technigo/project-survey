import React from 'react';

export const InputField = ({
  labelText,
  attributeID,
  type,
  placeholder,
  value,
  setText,
}) => {
  return (
    <div className="form-group form-group-name">
      <label htmlFor={attributeID}>
        {labelText}
        <input
          type={type}
          id={attributeID}
          name={attributeID}
          placeholder={placeholder}
          onChange={(event) => setText(event.target.value)}
          value={value}
          required
        />
      </label>
    </div>
  );
};
