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
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onInputChange}
      />
    </div>
  );
};

export default TextInput;
