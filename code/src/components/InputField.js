import React from "react";

const InputField = ({ name, type, options, value, onChange }) => {
  switch (type) {
    case "text": {
      return <input id={name} value={value} onChange={onChange} type={type} required></input>;
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
    default:
      console.log("Error");
  }
};

export default InputField;
