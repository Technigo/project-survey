import React from 'react';

export const NameForm = ({NextQuestion, backCounter, FirstName , LastName, onFirstName, onLastName}) => {
console.log('hello')
  return (
    <div className="Nameform">
      
      <h1> The name is {FirstName} {LastName} </h1>
      <input className="firstName"
      type="text" 
      placeholder="First Name" 
      onChange={onFirstName}
      value = {FirstName} />
      <input className="lastName"
      type="text" 
      placeholder="Last name" 
      onChange={onLastName}
      value = {LastName} />
      
      <button type="button" onClick={NextQuestion}> Back </button>
      <button type="button" onClick={backCounter}> Next Question</button>
    </div>
  )
}