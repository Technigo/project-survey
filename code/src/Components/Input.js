import React from "react"; 

/* Sending in name and onInputChange as props */
const Input = ({ name, onInputChange }) => {

    return (
        <section className="question1-wrapper">
            <h2 className="form-header">Please fill in the form:</h2>
            
            <h3 className="question-header">
                1. What's your name? 
                <span role="img" aria-label="cactus"> 🌵 </span> 
            </h3>
            
            <label 
                htmlFor="nameInput" 
                className="label-input"
            >
                Enter your name please: 
            </label>
            <input 
                id="nameInput"
                type="text"
                placeholder="My name is..."
                value={name}
                onChange={event => onInputChange(event.target.value)}
                required
            />
        </section>
     );
};

export default Input;