/* eslint-disable */
import React from 'react';

export const Time = ({ time, setTime }) => {
    const handleTimeChange = (event) => {
        setTime(event.target.value);
    }

    return (
        <form onSubmit={event => event.preventDefault()}>
            <label>
                At what time would you like your popcorn to be ready? <br></br>
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
                aria-label="Chose the time for when the order should be ready for pick-up."
                />
        <span class="validity"></span>
        <br></br>
        <small> Opening hours are 11am to 10pm.</small>
        </form>
    );
}

