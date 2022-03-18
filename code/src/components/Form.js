import React, { useState } from 'react'
import Intro from './Intro'
import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'
import Summary from './Summary'
import Footer from './Footer'


const Form = () => {


// Declaring all the variables here
const [nameInput, setNameInput] = useState('')
const [surnameInput, setSurnameInput] = useState('')
const [emailInput, setUserEmailInput] = useState('')
const [interest, setInterest] = useState(false)

const [page, setPage] = useState(0)

// These functions calls new question or goes back one page
const nextPage = () => {setPage(page + 1)}
const backPage = () => {setPage(page - 1)}
const restart = () => {setPage(0)}


// Funcions 
const onNameInputChange = (event) => {
    setNameInput(event.target.value)
}

const onSurnameInputChange = event => {
    setSurnameInput(event.target.value)
}

const onEmailInputChange = event => {
    setUserEmailInput(event.target.value)
}

const handleSubmit = (event) => {event.preventDefault()}

// Array of objects in radio buttons and dropdown
const arrayOfInterests = ["Key Lime Pie", "Best visits in Stockholm", "Tech News", "Programming"]

return (
  <>
<form className="form-wrapper" onSubmit={handleSubmit}>

    { /* INTRO PAGE */ }
    {page === 0 && <Intro nextPage={nextPage} />}
    

    { /* FIRST PAGE */ }
    {page === 1 && (
    <FirstQuestion 
    nameInput={nameInput}
    onNameInputChange={onNameInputChange}
    surnameInput={surnameInput}
    onSurnameInputChange={onSurnameInputChange}
    nextPage={nextPage}/>)}

    { /* SECOND PAGE */ }
    {page === 2 && (
        <SecondQuestion
        emailInput={emailInput}
        onEmailInputChange={onEmailInputChange}
        nextPage={nextPage}
        backPage={backPage}
        nameInput={nameInput}/>)}


    { /* THIRD PAGE */ }
    {page === 3 && (
        <ThirdQuestion
        setInterest={setInterest}
        arrayOfInterests={arrayOfInterests}
        nextPage={nextPage}
        backPage={backPage}/>)}

        {page === 4 && (
            <Summary
            nameInput={nameInput}
            emailInput={emailInput}
            interest={interest}
            restart={restart}
            />
        )}

</form>
<Footer />
</>
)}

export default Form