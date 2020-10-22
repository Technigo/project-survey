import React from "react";

const Input = ({ placeholder, setState, value }) => {
  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div>
      <input
        id="firstName"
        onChange={handleChange}
        type="text"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
