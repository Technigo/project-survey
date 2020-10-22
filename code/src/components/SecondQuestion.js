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
            <option value='sweden'>Sweden</option>
            <option value='other european country'>Other European Country</option>
            <option value='africa'>Africa</option>
            <option value='south america'>South America</option>
            <option value='north america'>North America</option>
            <option value='asia'>Asia</option>
            <option value='australia'>Australia</option>
            </select>
                </label>
        </div>
    );
};