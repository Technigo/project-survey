import React from 'react';

import './Inputs.css';

const Inputs = ({ formData, setForm, type, inputName, ...other }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const getInputs = () => {
    switch (type) {
      case 'text':
        return (
          <input
            required
            name={inputName}
            type={type}
            placeholder="..."
            value={formData[inputName]}
            onChange={handleChange} />
        );
      case 'radio':
        return (
          <>
            {other.options.map((option) => (
              <label htmlFor={option} key={option}>
                <input
                  required
                  id={option}
                  name={inputName}
                  type={type}
                  value={option}
                  onChange={handleChange} />
                {option}
              </label>
            ))}
          </>
        );
      case 'select':
        return (
          <select name={inputName} onChange={handleChange} required>
            <option value="">--Please choose an option--</option>
            {other.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  }

  return (
    <div className="input-wrapper">
      {getInputs()}
    </div>
  )
};

export default Inputs;
