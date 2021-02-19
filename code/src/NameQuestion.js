import React from 'react'

export const NameQuestion = (props) => {
    const {name, setName} = props
    
    return (
        <div>
            <label>What's your name?
                <input
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    required
                />
            </label>
        </div>
    )
}