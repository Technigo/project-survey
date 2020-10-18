import React from 'react';

export const Checkbox = ({ label, id, wantsToBeMentor, setWantsToBeMentor }) => {
  
  return (
    <label className="checkbox-label" htmlFor={id}>
      I want to be Gabriella's mentor!
      <input
        className="checkbox-input"
        type="checkbox"
        checked={wantsToBeMentor}
        onChange={event => setWantsToBeMentor(event.target.checked)}
        value={wantsToBeMentor}
      />
      {label}
    </label>
  )
}