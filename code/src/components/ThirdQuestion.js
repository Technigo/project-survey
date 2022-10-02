import React from "react";

export const ThirdQuestion = ({ fly, setMeals, increase, decrease }) => {

    return (
        <div className="container">
        <h1>What did you think about the meals?</h1>
     <div className="slider">
        <p>Very bad</p>
     <from className="ranger">
         <input type="range" min="1" max="10" step="1" onChange={event => setMeals(event.target.value)}/>
        </from>
        <p>Very good</p>
     </div>
     <div className="buttons">
        <button onClick={decrease}>Back</button>
        <button onClick={increase}>Next</button>
     </div>
    </div>
    )
}