import React, { useState } from 'react'


export const QuestionOne = () => {
    const [name, setName] = useState("");
    return (
        <form onSubmit={event => event.preventDefault()}>
            <p>What's your name?</p>
            <input className="name-input"
                type="text"
                onChange={event => setName(event.target.value)}
                value={name}
            />
        </form>
    );
}











