import React from "react";

export const InputTypeText = ({
  className,
  header,
  name,
  setName,
  placeholder,
}) => {
  return (
    <>
      <h3 tabIndex="0">{header}</h3>
      <label aria-label="Fill in your name">
        <input
          className={className}
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={placeholder}
        />
      </label>
    </>
  );
};
