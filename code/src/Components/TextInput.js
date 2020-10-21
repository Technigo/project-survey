import React from 'react'


export const TextInput = ({name, setName}) => {

    return (
        <form>
            <h2>What's your name?</h2>
            <form onSubmit ={event => event.preventDefault()}/> 
            <label tabIndex ="0">
                <input 
                    type="text"
                    onChange={event => setName(event.target.value)}
                    value={name}
                    required
                />

            </label>
        </form>
    )

}


