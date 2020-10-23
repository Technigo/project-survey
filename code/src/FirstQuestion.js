import React from 'react'


export const FirstQuestion = ({ name, setName, onNameChange: handleNameChange}) => {
    return (
        <section className="question1 section">
            <h2>Sends some love to</h2>
            <label htmlFor="name">Name</label>
            <input 
                value={name} 
                onChange={e => handleNameChange(e.target.value)} 
                id="name" 
                type="text"
                placeholder="Enter name"
            />
        </section>
    )
}