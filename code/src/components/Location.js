import React from 'react';

export const Location = (location, setLocation) => {
    
    return (
        <div className="form-components">
            <label htmlFor={location}>In which city do you want to work?</label>
            <input 
                type="text"
                onChange={setLocation} 
                value={location}
                // ref="location"
                required 
            />
        </div>
    )
}