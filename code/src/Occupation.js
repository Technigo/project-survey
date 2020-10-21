import React from 'react';

const Occupation = ({occupation, onOccupationChange}) => {
  return (
    <div className="occupation-input">
      <label htmlFor="occupation">Your job</label>
      <input 
        type="text" 
        id="occupation"
        onChange={(event) => onOccupationChange(event.target.value)}
        value={occupation}
      />
    </div>
  )
}

export default Occupation;