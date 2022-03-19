import React from 'react'



const Name = ({name, onNameChange, onStepChange}) => {
    
    return (
        <section className="question-container">
            <label htmlFor='name'>
                <h1>Hey you!</h1>
                <h2>We would love to hear your thoughts!</h2> 
                <div className='name-question'>
                    <h3>So, to start with..</h3>
                    <h3>what´s your name?</h3>
                </div>
                
            <div className="name-box" onSubmit = {event => event.preventDefault()}>
                <input
                id="name"
                type="text"
                onChange={onNameChange}
                value={name}
                />
                </div>
                </label>
                <div className="positionButton">
             <button onClick={onStepChange} disabled={name===""}>OK</button></div>
            
        </section>
    )
}

export default Name