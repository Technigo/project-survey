import React from 'react';

const WordAssoc = ({ formData, setForm, number }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <div className="card">
        <h3>Question {number}</h3>
        <p>this is my question?????</p>
        <h3>My Answer</h3>
        <input
          required
          name="answer1"
          type="text"
          placeholder="..."
          value={formData.answer1}
          onChange={handleChange} />
      </div>
    </>
  );
};

export default WordAssoc;
