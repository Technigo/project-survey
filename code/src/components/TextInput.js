import React from "react";

const TextInput = (props) => {

  const onTextInputChange = (event) => {
    props.onValueChange(event.target.value)
  }

  return (
    <>
      <form action="">
        <label htmlFor={props.label}></label>
        <input
          type="text"
          id={props.label}
          onChange={onTextInputChange}
          value={props.value}
        />
      </form>
    </>
  );
};

export default TextInput;
