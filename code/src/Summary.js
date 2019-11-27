import React, { useState } from 'react'
import "./Components/summary.css";


export const Summary = (props) => {
    return <div className="summaryText">
        <p>Great job! Your future is strong and bright! This is your CrossFit profile!</p>
        <p>You've been working hard during {props.reps} months! <br></br>Keep it up and you'll reach your goals! 
        </p>
        <p>Your first memory being a true CrossFiter was when you hit your first: {props.movement}'s</p>
        <p>{props.icon} sends her regards and hope you'll meet to wod one day! :-) </p>
    </div>
};
