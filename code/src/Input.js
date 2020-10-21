import React, { useState } from 'react'
import './Input.css'


export const Input = (props) => {

    return (
        <label className="input">
            <h3>Your email:</h3>
            <input
                type="email"
                placeholder="Write your email"
                onChange={event => props.onChanged(event.target.value)}
                value={props.value}
                required
            />
        </label>
    )
} 