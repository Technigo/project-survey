import React, {useState} from 'react'

const OccupationQuestion = () => {

  const [occupation, setOccupation] = useState('');
  return (
    <>
      <label for="occupation">My occupation is:</label>
      <input 
        type="text" 
        id="occupation" 
        onChange={event => setOccupation(event.target.value)}
        value={occupation}
      />
    </>

  )
}

export default OccupationQuestion;