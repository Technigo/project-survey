import React from "react";

const TextInput = ({ label, value, onValueChange }) => {
  const onTextInputChange = (event) => {
    onValueChange(event.target.value);
  };

  return (
    <>
      <form action="">
        <label htmlFor={label}></label>
        <input
          type="text"
          id={label}
          onChange={onTextInputChange}
          value={value}
        />
      </form>
    </>
  );
};

export default TextInput;
