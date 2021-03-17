import React, {useState} from 'react'

const OccupationQuestion = () => {

  const [occupation, setOccupation] = useState('');
  return (
    <div className="text-input">
      <label for="occupation">My occupation is:</label>
      <input 
        type="text" 
        id="occupation" 
        onChange={event => setOccupation(event.target.value)}
        value={occupation}
      />
    </div>

  )
}

export default OccupationQuestion;