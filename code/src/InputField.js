import React from 'react';

export const InputField = ({
  labelText,
  id,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="form-group form-group-name">
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
    </div>
  );
};
