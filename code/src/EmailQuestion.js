import React, {useState} from 'react'

const EmailQuestion = () => {

  const [email, setEmail] = useState('');
  return (
    <>
      <label for="email">E-mail:</label>
      <input 
        type="text" 
        id="email" 
        onChange={event => setEmail(event.target.value)}
        value={email}
      />
      
    </>

  )
}

export default EmailQuestion;