import React from 'react';

export const Checkbox = ({ wantsToBeMentor, setWantsToBeMentor }) => {
  
  return (
    <label>
      Do you want to be my mentor?
      <input
        type="checkbox"
        checked={wantsToBeMentor}
        onChange={event => setWantsToBeMentor(event.target.checked)}
      />
    </label>
  )
}