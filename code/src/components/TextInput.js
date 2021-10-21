import React from "react";

const TextInput = ({ label, value, onValueChange, valid }) => {
  const onTextInputChange = (event) => {
    onValueChange(event.target.value);
  };

  return (
    <>
      <label htmlFor={label}></label>
      <input
        className={`text-input valid-${valid}`}
        placeholder="Type here..."
        type="text"
        id={label}
        onChange={onTextInputChange}
        value={value}
      />
    </>
  );
};

export default TextInput;
