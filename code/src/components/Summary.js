import React from 'react'

const Summary = ({nameInput, emailInput, backPage}) => {

    return (

    <div>
        <h1>So this is you!</h1>
         
         <p>   Name:<span className="username">{nameInput}</span></p>
         <p>   Email: {emailInput} </p>



    <button class="btn" type="submit" onClick={backPage}> 
        Wow, thanks!</button>


    
    </div>
    )


}


export default Summary