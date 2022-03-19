import React from 'react'

const RadioForm = ({input, setInput}) => {
    const rolesList = [
        'Frontend',
        'Backend',
        'Fullstack',
        'Cloud'
    ]

    return (
        <div className="radio-form-div">
            <div>
                <h2>Interested in working with (select one)</h2>
                {rolesList.map(role => (
                <label key={role}>
                <input 
                    type="radio"
                    value={role}
                    name="roles"
                    required
                    onChange={event => setInput({...input, [event.target.name]: event.target.value})}
                    checked={input.roles === role}                      
                />
                {role}
                </label>   
                ))}
            </div> 
        </div>
    )
}

export default RadioForm;