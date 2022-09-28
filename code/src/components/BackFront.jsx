import React from 'react'

export const BackFront = ({ backFront, setBackFront }) => {
  const handleBackFrontChange = (event) => {
    setBackFront(event.target.value);
  };

  return (
    <fieldset className="back-front-container">
      <h2 className="quest-heading">What kind of developer are you primarily looking for at the moment?</h2>
      <select
        className="dropdown"
        value={backFront}
        onChange={handleBackFrontChange}>
        <option className="option" value="">Select one:</option>
        <option className="option" value="Backend">Back-end</option>
        <option className="option" value="Frontend">Front-end</option>
        <option className="option" value="Fullstack">Full Stack</option>
      </select>
    </fieldset>
  )
}
