import React, { useState } from 'react'

export const NameQuestion = () => {
    const [name, setName] = useState()
    return (
        <form className="name-question" >
            <h2>What is your full name?</h2>
            <form onSubmit={event => event.preventDefault()} />
            <label tabIndex='0'>
                <input
                    type="text"
                    id='name'
                    onChange={event => setName(event.target.value)}
                    value={name}
                    required minLength='2'
                    required
                />
            </label>
        </form>
    )
}