import React from "react";

// intro text e.g. "Welcome to this survey about autumn habits. Answer each question and see your result on what your perfect autumn day looks like."  

const Intro = ({ colorInput, onColorChange, onStepChange }) => {
    return (
        <form>
            <h1>
                Welcome to this survey about autumn habits! 
            </h1>
            <p>
                Answer each question to see your results on what your perfect autumn day looks like. 
            </p>

            <p>
                Before we start: 
           
            
            <label for="colorInput">please select the colour you wish to use to fill out the form. </label>
            </p>
            <input
                type="color"
                id="colorInput"
                value={colorInput}
                onChange={onColorChange}
            />
            
            <div className="button-box">
            <input type="submit" 
                className="button"
                onClick={onStepChange}></input>
            </div>
        </form>
    )

}
export default Intro;