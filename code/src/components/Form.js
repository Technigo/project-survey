import React, { useState } from 'react'
import { NameForm } from './NameForm';
import { MultiplieChoice } from './MultiplieChoice';
import { Email } from './Email'; 
import { LandingPage } from './LandingPage';


export const Form = () => {
// Declare variables 
 /*  const [email, SetEmail] = useState('') */
  const [FirstName, SetFirstName] = useState('')
  const [LastName, SetLastName] = useState('')
 /*  const [Spell, SetSpell] = useState('') */
  const [page, SetPage] = useState(0)

  

  const NextQuestion = () => {SetPage(page + 1 )}
  /* const backCounter = () => {SetNextPage(page - 1)} */


 // functions  
  const onFirstName = (event) => {
    SetFirstName(event.target.value)
  }

  const onLastName = event => {
    SetLastName(event.target.value)
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
      NextQuestion={NextQuestion} />  )} 
      
        
        {/* <Email />
        <MultiplieChoice /> */}
        
      </form>
    </div>
  )
}
