import React from 'react';

const Rorschach = ({ setForm, number, checkForError }) => {
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
  ];

  return (
    <>
      <div className="card">
        <h3>Question {number}</h3>
        <p>this is my question?????</p>
        <h3>My Answer</h3>
        <select className={checkForError} name="answer3" onChange={handleChange} required>
          <option value="">--Please choose an option--</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Rorschach;
