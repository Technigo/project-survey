import React from 'react'

const Summary = ({inputName, backPage, nextPage}) => {

    return (

    <div>
        <h1>So this is you!</h1>
         
         <p>   Name: {inputName} </p>



    <button class="btn" type="submit" onClick={backPage}> 
        <span role="img" aria-label="back arrow emoji">↩️</span> Go back</button>

        <button class="btn" type="submit" onClick={nextPage}> Next question!</button>

    
    </div>
    )


}


export default Summary