import React from "react";

const InputField = ({ id, type, options, value, onChange }) => {
  switch (type) {
    case "text": {
      return <input id={id} value={value} onChange={onChange} type="text"></input>;
    }
    case "radio": {
      return (
        <div id={id}>
          <label htmlFor={options[0]}>{options[0]}</label>
          <input
            id={id + "1"}
            type="radio"
            name={id}
            value={options[0]}
            // checked={value === options[0]}
            onChange={onChange}
            required
          />
          <label htmlFor={options[1]}>{options[1]}</label>
          <input
            id={id + "2"}
            type="radio"
            name={id}
            value={options[1]}
            // checked={value === options[1]}
            onChange={onChange}
            required
          />
        </div>
      );
    }
    case "select": {
      return (
        <select value={value} onChange={onChange} required>
          <option value="" defaultValue disabled>
            Choose option
          </option>
          <option value={options[0]}>{options[0]}</option>
          <option value={options[1]}>{options[1]}</option>
          <option value={options[2]}>{options[2]}</option>
        </select>
      );
    }
    default:
      console.log("Error");
  }
};

export default InputField;
