import React from 'react'

const Summary = ({ ageGroup, options, expectations }) => {
    return (
        <div>
        <h2>
        Your age is {ageGroup} and you stayed due to {options} </h2>
         <p>and thought {expectations} </p>
         </div>
    )
}

export default Summary
