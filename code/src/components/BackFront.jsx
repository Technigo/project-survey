import React from 'react'

export const BackFront = ({ backFront, setBackFront }) => {
  const handleBackFrontChange = (event) => {
    setBackFront(event.target.value)
  };

  return (
    <div className="question-container">
      <h2 className="question-heading">What kind of developer are you <span className="underline">primarily</span> after?</h2>
      <select
        className="dropdown"
        onChange={handleBackFrontChange}
        value={backFront}
        required>
        <option className="option" value="">Select one:</option>
        <option className="option" value="backend">Backend</option>
        <option className="option" value="frontend">Frontend</option>
        <option className="option" value="fullstack">Full Stack</option>
      </select>
    </div>
  )
};
