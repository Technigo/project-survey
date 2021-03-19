import React from 'react';



export const RadioBtn = ({ viewHour, onViewHour }) => {
    const viewHours = ['0-2', '3-5', '5+']

    return (
      <div className='radio-box'>
        <h2> How many hours are you watching football??</h2>
        {viewHours.map(hour => (
          <label key={hour} tabIndex='0'>
            <input
                type="radio"
                id={hour}
                name="hour"
                value={hour}
                onChange={(event) =>  onViewHour(event.target.value)}
                required
            />
            {hour}
          </label>
        ))}
        </div> 
    );
}