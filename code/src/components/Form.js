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
  const [Delivery, SetDelivery] = useState('') 
  const [Flavour, SetFlavour] = useState(false)
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

  const onDelivery = (event) => {
    SetDelivery(event.target.value)
  }

  const onFlavour = (event) => {
    SetFlavour(event.target.value)
  }




  function handleSubmit(event) { event.preventDefault(); } 



  return (
    <div className="survery-form">
      <div className="header"> <h1 className="header-text">ICE CREAM LAND</h1></div>
      
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
      FirstName={FirstName} 
      LastName={LastName} 
      onEmail={onEmail}
      NextQuestion={NextQuestion}
      backCounter={backCounter}
        />
       )}

      {page === 3 && (
      <MultiplieChoice
      Delivery={Delivery}
      onDelivery={onDelivery}
      NextQuestion={NextQuestion}
      backCounter={backCounter}
      /> 
      )}

      {page === 4 && (
        <FavoriteThing
        SetFlavour={SetFlavour}
        Flavour={Flavour}
        onFlavour={onFlavour}
        NextQuestion={NextQuestion}
        backCounter={backCounter}
        />
      )} 

      {page === 5 && (
        <Summary
        FirstName={FirstName}
        LastName={LastName}
        email={email}
        Delivery={Delivery}
        Flavour={Flavour}
        resetButton={resetButton}
        NextQuestion={NextQuestion}
      
        />
      )}
      
      {page === 6 && <ThankYou />}
        
        
      </form>
    </div>
  )
}
