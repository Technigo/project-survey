import React from 'react';

const contributes = ["Code Knowledge", "Tech Recruitment Knowledge", "Agile Project Management", "Experience as Product Owner"];

export const Radiobuttons = ({ canContributeWith, setCanContributeWith }) => {
  
  return (
    <fieldset>
    <legend>3. I can contribute with:</legend>
    {contributes.map(contributes => (
      <label 
        className="radiobutton-label" 
        key = {contributes} 
        htmlFor={contributes}>
          <input
            className="radiobutton-input"
            id={contributes}
            type="radio"
            value={contributes}
            onChange={(event) => setCanContributeWith(event.target.value)}
            checked={canContributeWith === contributes} 
            required
          />
        {contributes}
      </label>
    ))}
    </fieldset>
  );
};