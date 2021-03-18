import React from 'react';

import './Inputs.css';

const Inputs = ({ formData, setForm, type, inputName, ...other }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    let optnum = event.target.getAttribute('optnum');
    if (optnum === null && event.target.tagName === 'SELECT') {
      optnum = event.target.querySelector(`[value="${value}"]`).getAttribute('optnum');
    }
    setForm((prevState) => ({
      ...prevState,
      [name]: { ...formData[name], answer: value, optnum }
    }));
  };

  const getInputs = () => {
    switch (type) {
      case 'text':
        return (
          <input
            className="input"
            required
            name={inputName}
            type={type}
            placeholder="..."
            value={formData[inputName].answer}
            onChange={handleChange} />
        );
      case 'radio':
        return (
          <>
            {other.options.map((option, index) => (
              <label className="radio-label" htmlFor={option} key={option}>
                <input
                  className="input"
                  optnum={index}
                  required
                  id={option}
                  name={inputName}
                  type={type}
                  value={option}
                  onChange={handleChange}
                  checked={formData[inputName].answer === option && true} />
                {option}
                <div className="radio-input" />
              </label>
            ))}
          </>
        );
      case 'select':
        return (
          <select
            className="input"
            name={inputName}
            onChange={handleChange}
            value={formData[inputName].answer}
            required>
            <option value="">--Please choose an option--</option>
            {other.options.map((option, index) => (
              <option optnum={index} key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  return <div className={`input-wrapper input-wrapper--${type}`}>{getInputs()}</div>;
};

export default Inputs;
