import React, { useState } from 'react'

export const Dropdown = () => {
    const [location, setLocation] = useState("")

    return (
        <label>
            Choose your destination: 
            <select
                onChange={event => setLocation(event.target.value)}
                value={location}

            >
                <option value=""> - Select country - </option>
                <option value="bali">Bali</option>
                <option value="srilanka">Sri Lanka</option>
                <option value="mexico">Mexico</option>
            </select>
        </label>
    )
} 
