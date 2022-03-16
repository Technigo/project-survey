import React, { useState } from 'react'
import Intro from './Intro'
import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'


const Form = () => {


// Declaring all the pretty variables here
const [nameInput, setNameInput] = useState('')
const [surnameInput, setSurnameInput] = useState('')
const [userEmailInput, setUserEmailInput] = useState('')

const [page, setPage] = useState(0)

// These functions calls new question or goes back one page
const nextPage = () => {setPage(page + 1)}
const backPage = () => {setPage(page - 1)}


const onNameInputChange = (event) => {
    setNameInput(event.target.value)
}

const onSurnameInputChange = event => {
    setSurnameInput(event.target.value)
}

const onEmailInputChange = event => {
    setUserEmailInput(event.target.value)
}

return (
  
<form className="form-wrapper">


    {/* INTRO PAGE */}
    {page === 0 && <Intro nextPage={nextPage} />}
    

    {/* FIRST PAGE */}
    {page === 1 && (
    <FirstQuestion 
    nameInput={nameInput}
    onNameInputChange={onNameInputChange}
    surnameInput={surnameInput}
    onSurnameInputChange={onSurnameInputChange}
    nextPage={nextPage}
    backPage={backPage} />
    )}

    {/* SECOND PAGE */}
    {page === 2 && (
        <SecondQuestion
        userEmailInput={userEmailInput}
        onEmailInputChange={onEmailInputChange}
        nextPage={nextPage}
        backPage={backPage}
         />
    )}

</form>

)}

export default Form