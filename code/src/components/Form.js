import React, { useState } from 'react'
import Intro from './Intro'
import FirstQuestion from './FirstQuestion'


const Form = () => {


// Declaring all the pretty variables here
const [nameInput, setNameInput] = useState('')

const [page, setPage] = useState(0)

// These functions calls new question or goes back one page
const nextPage = () => {setPage(page + 1)}
const backPage = () => {setPage(page - 1)}


const onNameInputChange = (event) => {
    setNameInput(event.target.value)
}

return (
  
<form className="form-wrapper">


    {page === 0 && <Intro nextPage={nextPage} />}
    
    {page === 1 && (
    <FirstQuestion 
    nameInput={nameInput} 
    onNameInputChange={onNameInputChange} 
    nextPage={nextPage}
    backPage={backPage} />
    )}

</form>

)}

export default Form