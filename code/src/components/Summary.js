import React from 'react'

const Summary = ({checked, nameInput, emailInput, backPage}) => {

    return (

    <div>
        <h1>So this is you!</h1>

        <p className="descriptive-text">Thank you for subscribing.</p>
        <p className="descriptive-text">Hope you'll love the newsletter!</p>
         
         <p>   Name: <span className="username"> {nameInput}</span></p>
         <p>   Email: {emailInput} </p>
         <p>   The newsletter will cover: {checked} </p>



    <button className="btn-special" type="submit" onClick={backPage}> 
        Wow, thanks!</button>


    
    </div>
    )


}


export default Summary