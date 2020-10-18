import React from 'react';

export const Checkbox = ({ wantsToBeMentor, setWantsToBeMentor }) => {
  
  return (
    <label className="checkbox-label">
      Do you want to be my mentor?
      <input
        className="checkbox-input"
        type="checkbox"
        checked={wantsToBeMentor}
        onChange={event => setWantsToBeMentor(event.target.checked)}
      />
    </label>
  )
}