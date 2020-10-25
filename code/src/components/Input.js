import React from "react";

const Input = ({ placeholder, setState, value }) => {
  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <input
      className="input-contact"
      id="firstName"
      onChange={handleChange}
      type="text"
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
