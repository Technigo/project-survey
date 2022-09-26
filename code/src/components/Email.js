import React, { useState } from 'react';

export const Email = (nextPage, backCounter) => {
  const [email, SetEmail] = useState('')

  return (
    <div className="EmailForm">
      <input type="text" onChange={event => SetEmail(event.target.value)} value={email}/>
      <button type="button" onClick={nextPage}> Back </button>
      <button type="button" onClick={backCounter}> Next Question</button>
    </div>
  )
} 