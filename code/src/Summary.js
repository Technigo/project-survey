import React/*, { useState }*/ from 'react'
import "./Components/summary.css";


export const Summary = (props) => {
    return <div className="summaryText">
        <p>This is your CrossFit profile:</p>
        <p> You've been working hard during <strong>{props.reps} </strong> months, that's awesome! <br></br>Great job! You can really tell you're in to this!
        </p>
        <p>Your first memory being a true CrossFiter was when you hit your first: <strong>{props.movement}'s</strong></p>
        <p><strong>{props.icon}</strong> sends her regards and hope you'll meet to wod one day! :-) </p>
    </div>
};
