import React from 'react';

export const Summary = ({FirstName, LastName, email, Flavour, resetButton,NextQuestion,Delivery }) => {
    return(
        <>
        <div className="container">
            <span className="small-heading" aria-label="Summary of what you have order">Before confirming the order, please have a look that is what you whish for </span>
            <p className="answer" >Name:{FirstName} {LastName}</p> 
            <p className="answer" >Email:{email}</p> 
            <p className="answer" >Flavour:{Flavour}</p>
            <p className='answer'> Delivery:{Delivery}</p>
        <div className="btn-container">
            <button type="reset" className="button" onClick={resetButton}>Reset </button>
            <button type="button" className="button" onClick={NextQuestion}>Confirm</button>
        </div>        
        </div>
        </>
    )
}