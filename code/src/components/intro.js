import React from "react";

// intro text e.g. "Welcome to this survey about autumn habits. Answer each question and see your result on what your perfect autumn day looks like."  

const Intro = ({ onStepChange }) => {
    return (
        <form>
            <h1>
                Welcome to this survey about autumn habits! 
            </h1>
            <p>
                Answer each question to see your results on what your perfect autumn day looks like. 
            </p>
            
            <div className="button-box">
            <input type="submit" 
                value="Start Survey"
                className="button"
                onClick={onStepChange}></input>
            </div>
        </form>
    )

}
export default Intro;