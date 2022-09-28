import React from 'react';

export const Summary = ({FirstName, LastName, email, Spell, resetButton,NextQuestion,test1 }) => {
    return(
        <>
        <span>Thanks for your answer, Please confirm that you want to submit or restart . </span>
        <h1 className="answer" >First Name {FirstName}</h1>
        <h1 className="answer" >Last Name {LastName}</h1>
        <h1 className="answer" >Email: {email}</h1>
        <h1 className="answer" >Favorite spell: {Spell}</h1>
        <h1 className='answer'> Favorit thing: {test1}</h1>

        <button type="button" onClick={resetButton}>Reset </button>
        <button type="submit" onClick={NextQuestion}>Submit</button>
        </>
    )
}