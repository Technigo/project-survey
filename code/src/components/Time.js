/* eslint-disable */
import React from 'react';

export const Time = ({ time, setTime }) => {
    const handleTimeChange = (event) => {
        setTime(event.target.value);
    }

    return (
        <form onSubmit={event => event.preventDefault()}>
            <label for = "time-input">
                At what time would you like your popcorn to be ready?
            </label>
            <input 
                id="time-input"
                type="time"
                className="time-input"
                min="11:00"
                max="22:00"
                required 
                value={time}
                onChange={handleTimeChange}
                />
        <span class="validity"></span>
        <small>Opening hours are 11am to 10pm. </small>
        </form>
    );
}


//aria-label="Time for when order should be done."