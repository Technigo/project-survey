import React from 'react';

export const Location = ({location, setLocation}) => {
    const onLocationChange = (e) => {
        setLocation(e.target.value);
    }

    return (
        <>
            <h4 tabIndex="0">In which city do you want to work?</h4>
            <div className="form-components">
                <input 
                    type="text"
                    onChange={onLocationChange} 
                    value={location}
                    placeholder="City"
                    aria-label="Input city name"
                    required 
                />
            </div>
        </>
    )
}