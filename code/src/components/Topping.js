import React from 'react';

export const Time = ({ time, setTime }) => {
    const handleTimeChange = (event) => {
        setTime(event.target.value);
    }

    return (
        <form onSubmit={event => event.preventDefault()}>
            <label>
            What time would you like your popcorn to be ready?
            <input 
                type="time"
                id="time-input"
                className='time-input'
                value={time}
                required
                onChange={handleTimeChange}
                autoComplete="off"
                pattern=''

                aria-label="Time for when order should be done."
            />

        </label>
        </form>
    );
}

// If yes, display chocolate.
// If no, without chocolate. 