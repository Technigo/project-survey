import React from 'react'

const SelectForm = ({input, setInput}) => {
    return (
        <div className="select-form-div">
            <label className="input-fields">
            Choose location:
            <select 
                value={input.location} 
                name="location"
                onChange={event => setInput({...input, [event.target.name]: event.target.value})}
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