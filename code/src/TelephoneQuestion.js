import React, {useState} from 'react'

const TelephoneQuestion = () => {

  const [telephone, setTelephone] = useState('');
  return (
    <>
      <label for="telephone">Telephone:</label>
      <input 
        type="text" 
        id="telephone" 
        onChange={event => setTelephone(event.target.value)}
        value={telephone}
      />
      
    </>

  )
}

export default TelephoneQuestion;