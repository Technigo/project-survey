import React from 'react';

const EmailQ = ({ email, OnEmailInputChange, nextQ }) => {
  return (
    <form onSubmit={nextQ}>
      <label htmlFor="emailInput">
        <h2>Leave us your email address, and we´ll follow-up with an offer!</h2>
        <input type="text" value={email} onChange={OnEmailInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default EmailQ