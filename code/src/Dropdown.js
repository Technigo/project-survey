import React, { useState } from 'react'
import "./Dropdown.css"

export const Dropdown = () => {
    const [location, setLocation] = useState("")

    return (
        <label className="country">
            <h3> Choose your destination: </h3> 
            <select 
                onChange={event => setLocation(event.target.value)}
                value={location}
            >
                <option value=""> - Select country - </option>
                <option value="bali">Bali</option>
                <option value="srilanka">Sri Lanka</option>
                <option value="madagascar">Madagascar</option>
                <option value="fiji">Fiji</option>
                <option value="seychelles">Seychelles</option>
                
            </select>
        </label>
    )
} 
