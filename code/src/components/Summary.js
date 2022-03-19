import React from 'react'

const Summary = ({
    restart, 
    interest, 
    nameInput, 
    surnameInput, 
    emailInput, 
    amountOfEmail}) => {

    return (

    <div>
        <h1>Here we go!</h1>

        <p className="descriptive-text">Thank you for subscribing.</p>
        <p className="descriptive-text">Hope you'll love the newsletter!</p>
         
         <div className="summary-text">
         <p>Name: <span className="username"> {nameInput} {surnameInput}</span></p>
         <p>Email: <span className="emailadress"> {emailInput}</span> </p>
         <p>The newsletter will cover: {interest} </p>
         <p>You'll get the newsletter: {amountOfEmail} </p>
         </div>


    <button className="btn-special" type="submit" onClick={restart}> 
        Wow, thanks!</button>


    
    </div>
    )


}


export default Summary