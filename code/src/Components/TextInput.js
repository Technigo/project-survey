import React from 'react'


export const TextInput = ({name, setName}) => {

    return (
        <form>
            <h1>Whoop Whoop It's Game's Night!  </h1>
            <form onSubmit ={event => event.preventDefault()}/> 
            <label>
                What's your name?
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


