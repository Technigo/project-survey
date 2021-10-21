import React from "react";

const SelectInput = ({ options, selection, onValueChange, valid }) => {

  const onSelectChange = (event) => {
    onValueChange(event.target.value);
  };

  return (
    <>
      <select className={`select-box valid-${valid}`} value={selection} onChange={onSelectChange}>
        <option className="default-option" value="" disabled>
          Choose one
        </option>
        {options.map((option) => {
          return (
            <option className="select-option" key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectInput;
