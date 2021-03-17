import React, {useState} from 'react'

const EmailQuestion = () => {

  const [email, setEmail] = useState('');
  return (
    <div className="text-input">
      <label for="email">My E-mail address:</label>
      <input 
        type="text" 
        id="email" 
        onChange={event => setEmail(event.target.value)}
        value={email}
      />
      
    </div>

  )
}

export default EmailQuestion;