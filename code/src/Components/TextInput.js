import React from "react";

const TextInput = ({ onChange, value, placeholder, id }) => {
  const onInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id}></label>
      <input
        className="text-box"
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
};

export default TextInput;
