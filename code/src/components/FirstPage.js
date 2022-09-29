import React from 'react';

export const FirstPage = ({ firstPage, setFirstPage }) => {
  const handleFirstChange = (event) => {
    setFirstPage(event.target.value);
  }
  return (
    <form className="startpage">
      <h2 className="title">Employee Feedback</h2>
      <p>Please tell us how we can improve our culture and support you!</p>
      <input type="text" value={firstPage} onChange={handleFirstChange} />
      <button type="button" onClick={handleFirstChange}>Next Question</button>
    </form>
  );
};