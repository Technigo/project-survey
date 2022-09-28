import React from 'react';

export const Email = ({NextQuestion, backCounter, onEmail, email}) => {
  console.log('test 2')

  return (
    <div className="EmailForm">
      <span>Whats your email?</span>
      <input 
      type="text"
      placeholder="exampel@exapmel.com"
      onChange={onEmail} 
      value={email}
      key={email}/>
      
      <button type="button" onClick={NextQuestion} className="button"> Next Question </button>
      <button type="button" onClick={backCounter} className="button">back</button>
    </div>
  )
} 