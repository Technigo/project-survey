import React from 'react'

const DropdownLocation = ( {label, location, onLocationChange}  ) => {
    return (
        <div className='dropdown-location'>
            <label htmlFor="location">
                <h1 className='location-text'>Where do you live?</h1>
            </label>
            <select
                className='dropdown-menu'
                name={label} 
                value={location} 
                onChange={onLocationChange}
            >
                <option value="" disabled>Select location</option>
                <option value="Stockholm">Stockholm</option>
                <option value="Gothenburg">Gothenburg</option>
                <option value="Uppsala">Uppsala</option>
                <option value="Linköping">Linköping</option>
            </select>
        </div>
    )
}

export default DropdownLocation
