import React, { useState } from 'react';

export const Location = () => {
    const [location, setLocation] = useState('')
    return (
        <div className="form-components">
            <label htmlFor="location">What's your favourite place in the world?</label>
            <input 
                type="text"
                onChange={(event) => setLocation(event.target.value)} 
                value={location}
                ref="location"
                required 
            />
        </div>
    )
}