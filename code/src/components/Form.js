import React, { useState } from 'react'
import { NameForm } from './NameForm';
import { MultiplieChoice } from './MultiplieChoice'; 
import { Email } from './Email'; 
import { LandingPage } from './LandingPage';
import { Summary } from './Summary';
import { ThankYou } from './Thankyou';
import { FavoriteThing } from './RadioBtn'


export const Form = () => {
// Declare variables 
  const [email, SetEmail] = useState('') 
  const [FirstName, SetFirstName] = useState('')
  const [LastName, SetLastName] = useState('')
  const [Spell, SetSpell] = useState('') 
  const [test1, SetTest1] = useState(false)
  const [page, SetPage] = useState(0)
  

  

  const NextQuestion = () => {SetPage(page + 1 )}
  const backCounter = () => {SetPage(page - 1)}
  const resetButton = () => {SetPage(0)}  


 // functions  
  const onFirstName = (event) => {
    SetFirstName(event.target.value)
  }

  const onLastName = event => {
    SetLastName(event.target.value)
  }

  const onEmail = (event) => {
    SetEmail(event.target.value)
  }

  const onSpell = (event) => {
    SetSpell(event.target.value)
  }

  const onTest1 = (event) => {
    SetTest1(event.target.value)
  }




  function handleSubmit(event) { event.preventDefault(); } 



  return (
    <div className="survery-form">
      <form className='form-wrapper' onSubmit={handleSubmit} >  

       {page === 0 &&  <LandingPage NextQuestion={NextQuestion} />}

       {page === 1 && ( 
      <NameForm 
      FirstName={FirstName} 
      LastName={LastName} 
      onFirstName={onFirstName} 
      onLastName={onLastName} 
      NextQuestion={NextQuestion}
      backCounter={backCounter} 
      />  )} 

       {page === 2 && (
        <Email 
        email={email}
        onEmail={onEmail}
        NextQuestion={NextQuestion}
       backCounter={backCounter}
        />
       )}

      {page === 3 && (
      <MultiplieChoice
      Spell={Spell}
      onSpell={onSpell}
      NextQuestion={NextQuestion}
      backCounter={backCounter}
      /> 
      )}

      {page === 4 && (
        <FavoriteThing
        SetTest1={SetTest1}
        test1={test1}
        onTest1={onTest1}
        NextQuestion={NextQuestion}
        backCounter={backCounter}
        />
      )} 

      {page === 5 && (
        <Summary
        FirstName={FirstName}
        LastName={LastName}
        email={email}
        Spell={Spell}
        resetButton={resetButton}
        NextQuestion={NextQuestion}
        test1={test1}
        />
      )}
      
      {page === 6 && <ThankYou />}
        
        
      </form>
    </div>
  )
}
