import React from 'react';

const Occupation = ({occupation, onOccupationChange}) => {
  return (
    <section className="occupation-input">
      <label htmlFor="occupation">Your job</label>
      <input 
        type="text" 
        id="occupation"
        onChange={(event) => onOccupationChange(event.target.value)}
        value={occupation}
      />
    </section>
  )
}

export default Occupation;