import React from 'react';

const EmailQ = ({ email, setEmail }) => {
  const handleEmailInputChange = (event) => {
    setEmail(event.target.value)
  }
  return (
    <div className="container">
      <p>Leave us your email address, and we´ll follow-up with an offer!</p>
      <input type="text" value={email} onChange={handleEmailInputChange} />
      <button type="submit">Submit</button>
    </div>
  )
}

export default EmailQ