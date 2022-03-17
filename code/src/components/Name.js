import React, { useState } from 'react'



const Name = ({name, onNameChange, onStepChange}) => {
    
    return (
        <section className="question-container">
            <label htmlFor='name'>
                <h1>Hey friend!</h1>
                <h2>We hope you enjoyed our event!</h2> 
                <p>We would be so thrilled if you´d take a few minutes and help us get even better.</p>  
                <p>To start with, what´s your name?</p>
                </label>
            <div class="name-box" onSubmit = {event => event.preventDefault()}>
                <input
                id="name"
                type="text"
                onChange={onNameChange}
                value={name}
                />
             <button onClick={onStepChange} disabled={name===""}>OK</button>
             </div>
        </section>
    )
}

export default Name