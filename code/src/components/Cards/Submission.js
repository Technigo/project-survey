import React from 'react';

const Submission = ({ setCheckForError }) => {
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setForm((prevState) => ({ ...prevState, [name]: value }));
  // };
  const handleClick = () => {
    setCheckForError('checking')
  }

  return (
    <>
      <div className="card">
        <h3>Submission</h3>
        <button type="submit" onClick={handleClick}>SUBMIT</button>

      </div>
    </>
  );
};

export default Submission;
