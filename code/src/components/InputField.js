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
            <label htmlFor={o.value}>{o.label}</label>
            <input
              id={o.value}
              type={type}
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={onChange}
              required
            />
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
