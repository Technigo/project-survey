import React from 'react'


export const Question1 = ({ name, onNameChange: handleNameChange}) => {
    return (
        <section className="question1 section">
            <h2>Sends some love to</h2>
            <label htmlFor="name">Name</label>
            <input 
                id="name" 
                type="text"
                placeholder="Enter name"
                value={name} 
                onChange={e => handleNameChange(e.target.value)} 
                required
                aria-required="true"
            />
        </section>
    )
}