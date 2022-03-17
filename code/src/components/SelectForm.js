import React from 'react'

const SelectForm = ({location, setLocation}) => {
    return (
        <div className="select-form-div">
            <label className="input-fields">
            Choose location:
            <select 
                value={location} 
                onChange={event => setLocation(event.target.value)}
                required
            >
                <option disabled value="">Choose a location</option>
                <option value="Stockholm">Stockholm</option>
                <option value="Malmö">Malmö</option>
                <option value="Göteborg">Göteborg</option>            
            </select>
            </label>        
        </div>
    )
}

export default SelectForm;