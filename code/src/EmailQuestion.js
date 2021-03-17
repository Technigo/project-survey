import React from 'react'

const EmailQuestion = (props) => {
  const {email, setEmail} = props
  const onEmailChange = (event) => {
    console.log(`Email: ${event.target.value}`);
    setEmail(event.target.value)
  };
   
  return (
    <div className="text-input">
      <label htmlFor="email">My E-mail address:</label>
      <input 
        type="text" 
        id="email" 
        onChange= {onEmailChange}
        value={email}
      />
      
    </div>

  )
}

export default EmailQuestion;