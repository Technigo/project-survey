import React from 'react'

export const BackFront = ({ backFront, setBackFront }) => {
  const handleBackFrontChange = (event) => {
    setBackFront(event.target.value)
  };

  return (
    <div className="backfront-container">
      <h2 className="quest-heading">What kind of developer are you primarily looking for at the moment?</h2>
      <select
        className="dropdown"
        onChange={handleBackFrontChange}
        value={backFront}
        required>
        <option className="option" value="">Select one:</option>
        <option className="option" value="Backend">Backend</option>
        <option className="option" value="Frontend">Frontend</option>
        <option className="option" value="Full Stack">Full Stack</option>
      </select>
    </div>
  )
};
