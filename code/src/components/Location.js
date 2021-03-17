import React from 'react';

export const Location = ({location, setLocation}) => {
    const onLocationChange = (e) => {
        console.log(`Location: ${e.target.value}`);
        setLocation(e.target.value);
    }

    return (
        <div className="form-components">
            <label htmlFor={location}>In which city do you want to work?</label>
            <input 
                type="text"
                onChange={onLocationChange} 
                value={location}
                // ref="location"
                required 
            />
        </div>
    )
}