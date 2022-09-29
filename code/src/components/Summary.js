import React from 'react';

const Summary = ({ name, content, recurrence, email }) => {
  return (
    <div className="summary-wrapper">
      <h2>Summary</h2>
      <h3>Thank you for completing this survey, {name}.</h3>
      <p>You are interested in receving {content} in your box
      and would prefer to receive it {recurrence}.
      </p>
      <p>We will follow up by contact you to: {email}</p>
    </div>
  )
}

export default Summary