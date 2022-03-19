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
      return options.map((o) => {
        return (
          <div key={o.value}>
            <input
              id={o.value}
              type={type}
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={onChange}
              required
            />
            <label htmlFor={o.value}>{o.label}</label>
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
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
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
            {options.map((o) => (
              <span key={o.value}>{o.label}</span>
            ))}
          </div>
        </>
      );
    }
    default:
      console.log("Error: type can only be 'text', 'radio', or 'select'");
  }
};

export default InputField;
