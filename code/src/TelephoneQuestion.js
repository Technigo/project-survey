import React, {useState} from 'react'

const TelephoneQuestion = () => {

  const [telephone, setTelephone] = useState('');
  return (
    <div className="text-input">
      <label for="telephone">My Telephone Number:</label>
      <input 
        type="text" 
        id="telephone" 
        onChange={event => setTelephone(event.target.value)}
        value={telephone}
      />
      
    </div>

  )
}

export default TelephoneQuestion;