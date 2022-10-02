import React from 'react';

export const Email = ({NextQuestion, backCounter, onEmail, email, FirstName, LastName}) => {
  return (
    <div className="container">
      <span className="small-heading" aria-label="Write your first name below"> <h1 className="small-heading">Hi {FirstName} {LastName} we also need your email to complete the order. </h1></span>
        <br></br>
        <input 
        type="text"
        className="EmailInput"
        placeholder="exampel@exapmel.com"
        onChange={onEmail} 
        value={email}
        />
      
      <div className="btn-container">
        <button type="button" onClick={backCounter} className="button"> Back</button>
        <button type="button" onClick={NextQuestion} className="button"> Next </button>
      </div>
    </div>
  )
} 