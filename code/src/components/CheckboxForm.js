import React from 'react'

const CheckboxForm = ({willTravel, setWillTravel}) => {
    return (
        <div className="checkbox-form-div">
            <div>
                <label>
                I want to travel in work
                <input 
                    type="checkbox"        
                    checked={willTravel}
                    onChange={event => setWillTravel(event.target.checked)}
                />
                </label>
            </div>
        </div>
    )
}

export default CheckboxForm;