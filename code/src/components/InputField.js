import React from "react";
import "./InputField.css";

const InputField = ({ name, type, options, value, onChange }) => {
  switch (type) {
    case "text": {
      return (
        <input
          id={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder="Type here..."
          autoFocus
          required
        ></input>
      );
    }
    case "radio": {
      return options.map((option) => {
        return (
          <div key={option.value}>
            <input
              id={option.value}
              type={type}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              required
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        );
      });
    }

    case "select": {
      return (
        <select value={value} onChange={onChange} required>
          <option value="" defaultValue disabled>
            Choose option
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    }
    case "range": {
      return (
        <>
          <label htmlFor={name}>
            <input
              type={type}
              id={name}
              min={options[0].value}
              max={options[options.length - 1].value}
              defaultValue={options[0].value}
              onChange={onChange}
            />
          </label>
          <div className="input-range-group">
            {options.map((option) => (
              <span key={option.value}>{option.label}</span>
            ))}
          </div>
        </>
      );
    }
    default:
      console.log("Error: type can only be 'text', 'radio', 'range', or 'select'");
  }
};

export default InputField;
