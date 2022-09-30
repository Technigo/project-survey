import React from 'react';

const Summary = ({ name, content, recurrence, email }) => {
  return (
    <div className="summary-wrapper">
      <h1>Summary</h1>
      <h2>Thank you for completing this survey, {name}.</h2>
      <p>You are interested in receving <strong>{content}</strong> in your box
      and would prefer to receive it <strong>{recurrence}</strong>.
      </p>
      <p>We will follow up by contacting you at: <strong>{email}</strong></p>
    </div>
  )
}

export default Summary