import React from 'react'



export const Counter = ( {props, counterIncrease, counterDecrease, stepChange} ) => {



    return (
    <section>  
    <div> My counter is: {props} </div>
    <button onClick={counterDecrease} >Go Back! </button>
    <button onClick={counterIncrease} >Click! </button>

    <button onClick={stepChange}>Next question</button>

    </section> 
    )

    }