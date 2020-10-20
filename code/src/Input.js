import React, { useState } from 'react'
import './Input.css'


export const Input = () => {
    const[mail, setMail] = useState("")

    return (
        <form className="input">
            <h3>Your email: {mail}</h3>
            <input
                type="text"
                onChange={(event => setMail(event.target.value))}
                value={mail}
            />
        </form>
    )
} 