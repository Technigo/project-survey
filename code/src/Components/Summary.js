import React from 'react'

const Summary = ({nameInput, qualityInput, homeInput}) => {
    return(

    <div>
        <p> Hello {nameInput}!
        You are {qualityInput} and you belong to {homeInput}.</p>
    </div>

    )
}




export default Summary