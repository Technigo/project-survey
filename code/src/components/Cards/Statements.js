import React from 'react';

const Statements = ({ setForm, number, checkForError }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const options = [
    'Strongly Agree',
    'Agree',
    'No opinion',
    'Disagree',
    'Strongly Disagree'
  ]

  return (
    <>
      <div className="card">
        <h3>Question {number}</h3>
        <p>this is my question?????</p>
        <h3>My Answer</h3>
        {options.map((option) => (
          <label htmlFor={option} key={option}>
            <input
              className={checkForError}
              required
              id={option}
              type="radio"
              name="answer2"
              value={option}
              onChange={handleChange} />
            {option}
          </label>
        ))}
      </div>
    </>
  );
};

export default Statements;
