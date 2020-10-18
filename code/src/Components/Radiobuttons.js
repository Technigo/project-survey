import React from 'react';

const contributes = ["Code Knowledge", "Tech Recruitment Knowledge", "Agile Project Management", "Experience as Product Owner"];

export const Radiobuttons = ({ id, canContributeWith, setCanContributeWith }) => {
  
  return (
    <>
    I can contribute with: 
    {contributes.map(contributes => (
      <label 
        className="radiobutton-label" 
        key = {contributes} 
        htmlFor={id}>
          <input
            className="radiobutton-input"
            id={id}
            type="radio"
            value={contributes}
            onChange={(event) => setCanContributeWith(event.target.value)}
            checked={canContributeWith === contributes} 
            required
          />
        {contributes}
      </label>
    ))}
    </>
  )


}