import React from 'react';

export const NameForm = ({NextQuestion, backCounter, FirstName , LastName, onFirstName, onLastName}) => {

  return (
    <div className="container">
      <h1 className="small-heading-name">What´s your name ?</h1>
      <label htmlFor="firstname"><input className="firstName"
      type="text" 
      placeholder="First Name" 
      onChange={onFirstName}
      value = {FirstName}
      />
      </label>
      <label htmlFor="LastName">
      <input className="lastName"
      type="text" 
      placeholder="Last name" 
      onChange={onLastName}
      value = {LastName} />
      </label>
      
      <div className="btn-container">
            <button type="button" onClick={backCounter} className="button"> Back</button>
            <button type="button" onClick={NextQuestion} className="button"> Next </button>
            
            </div>
    </div>
  )
}