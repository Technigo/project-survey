import React, { useState} from 'react'

const Email = ({ email, setEmail}) => {

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    return (

        <div>
            <label>

                <h2 className='question-title'>Please type your email adress so we'll know how to contact you!</h2>

                <input
                type='text'
                onChange={onEmailChange}
                value={email}
                />

            </label>

            <button className='ok-button'></button>
        </div>
    )
} 

export default Email;