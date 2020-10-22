import React from 'react'

export const NameQuestion = ({ name, setName }) => {

    return (
        <form className="name-question" >
            <h2 tabIndex='0'>What is your full name?</h2>
            <form onSubmit={event => event.preventDefault()} />
            <label tabIndex='0'>
                <input
                    type="text"
                    id='name'
                    onChange={event => setName(event.target.value)}
                    value={name}
                    required minLength='2'
                />
            </label>
        </form>
    )
}