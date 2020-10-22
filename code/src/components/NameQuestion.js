import React from 'react'

export const NameQuestion = ({ name, setName }) => {

    return (
        <div className="name-question" >
            <h2 tabIndex='0'>What is your full name?</h2>
            <label tabIndex='0' onSubmit={event => event.preventDefault()}>
                <input
                    type="text"
                    className='name'
                    onChange={event => setName(event.target.value)}
                    value={name}
                    required minLength='2'
                />
            </label>
        </div>
    )
}