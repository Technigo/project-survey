import React from 'react';

const contributes = ["Code Knowledge", "Tech Recruitment Knowledge", "Agile Project Management", "Experience as Product Owner"];

export const Radiobuttons = ({ canContributeWith, setCanContributeWith }) => {
  
  return (
    <>
    I can contribute with: 
    {contributes.map(group => (
      <label key = {group}>
        <input
          type="radio"
          value={group}
          onChange={(event) => setCanContributeWith(event.target.value)}
          checked={canContributeWith === group} 
          required
        />
        {group}
      </label>
    ))}
    </>
  )


}