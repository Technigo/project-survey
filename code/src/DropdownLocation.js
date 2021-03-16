import React from 'react'

const DropdownLocation = (props) => {
    return (
        <div className='dropdown-location'>
            <label htmlFor="location">
                <h1>Where do you live?</h1>
            </label>
            <select 
                name={props.label} 
                value={props.location} 
                onChange={event => props.setLocation(event.target.value)}
            >
                <option value="Stockholm">Stockholm</option>
                <option value="Gothenburg">Gothenburg</option>
                <option value="Uppsala">Uppsala</option>
                <option value="Linköping">Linköping</option>
            </select>
        </div>
    )
}

export default DropdownLocation
