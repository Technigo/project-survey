import React from 'react';

const OccupationQuestion = (props) => {
  const {occupation, setOccupation} = props
  const onOccupationChange = (event) => {
    console.log(`Occupation: ${event.target.value}`);
    setOccupation(event.target.value)
  }; 
  return (
    <div className="text-input-container">
      <label htmlFor="occupation">My occupation is:</label>
      <input 
        className="text-input"
        type="text" 
        id="occupation" 
        onChange={onOccupationChange}
        value={occupation}
      />
    </div>

  )
}

export default OccupationQuestion;