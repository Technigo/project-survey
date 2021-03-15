import React, { useState} from 'react'

const Email = ({ email, setEmail}) => {

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    return (

        <div className='questionContainer one'>
            <label>

                <h2 className='questionTitle'>Please type your email adress so we'll know how to contact you!</h2>

                <input
                type='text'
                onChange={onEmailChange}
                value={email}
                />

            </label>

            <button className='okButton'><a href='#workArea'>OK</a></button>
        </div>
    )
} 

export default Email;