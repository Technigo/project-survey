import React from 'react'


export const Counter = ( {value, valueUpdateInput, stepChange} ) => {



    return (

    <form>
    <div className="pergament"> </div>

        <label>What's your overall rating of the show?</label>
    <div> My rating is: {value} </div>

    <div className="slidecontainer">
    <input type="range" 
    min="1" max="100" 
    className="slider" id="myRange" 
    aria-valuemin="1"
    aria-valuemax="100"
    aria-valuenow="50"
    onChange={valueUpdateInput}></input>
    </div>
    <button onClick={stepChange}>Next question</button>

    </form>

    )

    }
