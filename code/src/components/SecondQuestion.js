import React from 'react'

export const SecondQuestion = ({location, setLocation}) => {
    
    return (
        <div className='second-question'>
            <h2 className='location-header' tabIndex="0">Where are you from?</h2>
            <label>
                <select
            onChange={event => setLocation(event.target.value)}
            value={location}
            aria-label="select-menu"
            >
            <option value=''>Select where you are from:</option>
            <option value='Sweden'>Sweden</option>
            <option value='Other European country'>Other European Country</option>
            <option value='Africa'>Africa</option>
            <option value='South America'>South America</option>
            <option value='North America'>North America</option>
            <option value='Asia'>Asia</option>
            <option value='Australia'>Australia</option>
                </select>
            </label>
        </div>
    );
};