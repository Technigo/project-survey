import React, {useState} from 'react'

const NameQuestion = () => {

  const [name, setName] = useState('');
  return (
    <div className="text-input">
      <label for="name">My name is:</label>
      <input 
        type="text" 
        id="name" 
        onChange={event => setName(event.target.value)}
        value={name}
      />
    </div>

  )
}

export default NameQuestion;