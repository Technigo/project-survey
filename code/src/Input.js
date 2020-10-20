import React, { useState } from 'react'
import './Input.css'


export const Input = () => {
    const[mail, setMail] = useState("")

    return (
        <label className="input">
            <h3>Your email:</h3>
            <input
                type="text"
                value={mail}
                placeholder="Write your email"
                onChange={(event => setMail(event.target.value))}
                required
            />
        </label>
    )
} 