import React, { useState } from 'react'
import "./Dropdown.css"

export const Dropdown = (props) => {

    return (
        <label className="country">
            <h3> Choose your destination: </h3> 
            <select className="dropdown"
                onChange={event => props.onChanged(event.target.value)}
                value={props.value}
            >
                <option value=""> - Select country - </option>
                <option value="Bali">Bali</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Fiji">Fiji</option>
                <option value="Seychelles">Seychelles</option>
                
            </select>
        </label>
    )
} 
