import React from "react";

export const Answers = ({ reset, quest1, quest2, quest3, quest4, quest5, name, age, trip, fly, meal, emplo, increase, decrease }) => {

    return (
        <div className="container">
         <div className="answers">
            <h2>
            <button className="change" onClick={reset}>Change</button>  Your name: {name} <br></br><br></br>
            <button className="change" onClick={quest1}>Change</button>  Your age: {age} <br></br><br></br>
            <button className="change" onClick={quest2}>Change</button>  Your trip: {trip}<br></br><br></br>
            <button className="change" onClick={quest3}>Change</button>  Your rate about the fly: {fly} <br></br><br></br>
            <button className="change" onClick={quest4}>Change</button>  Your rate about the meals: {meal} <br></br><br></br>
            <button className="change" onClick={quest5}>Change</button>  Your rate about the customer service: {emplo} <br></br>
            </h2>
         </div>
         <div className="buttons">
            <button onClick={increase}>Submit</button>
         </div>
    </div>
    )
}