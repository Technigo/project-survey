import React from "react";

// intro text e.g. "Welcome to this survey about autumn habits. Answer each question and see your result on what your perfect autumn day looks like."  

const Intro = ({ onStepChange }) => {
    return (
        <>
        <p>
            Welcome to this survey about autumn habits! 
        </p>
        <p>
            Answer each question to see your results on what your perfect autumn day looks like. 
        </p>
        <button onClick={onStepChange}>Start</button>
        </>
    )

}
export default Intro;