import React from 'react'

const CheckboxForm = ({input, setInput}) => {
    return (
        <div className="checkbox-form-div">
            <div>
                <label>
                I want to travel in work (optional)
                <input 
                    type="checkbox"  
                    name="willTravel"      
                    checked={input.willTravel}
                    onChange={event => setInput({...input, [event.target.name]: event.target.checked})}
                />
                </label>
            </div>
        </div>
    )
}

export default CheckboxForm;