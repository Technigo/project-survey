import React from 'react';

export const BackFront = ({ backFront, setBackFront }) => {
  const handleBackFrontChange = (event) => {
    setBackFront(event.target.value)
  };

  return (
    <div className="survey-content-container">
      <h3 className="sub-heading q">What kind of developer are you <span className="underline">primarily</span> after?</h3>
      <select
        className="dropdown"
        onChange={handleBackFrontChange}
        value={backFront}>
        <option className="option" value="">Select one:</option>
        <option className="option" value="backend">Backend</option>
        <option className="option" value="frontend">Frontend</option>
        <option className="option" value="fullstack">Full Stack</option>
      </select>
    </div>
  );
};
