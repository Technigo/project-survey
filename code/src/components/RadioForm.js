import React from 'react'

const RadioForm = ({roles, setRoles}) => {
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
                    name="work-role"
                    required
                    onChange={event => setRoles(event.target.value)}
                    checked={false ? roles : roles === role}                      
                />
                {role}
                </label>   
                ))}
            </div> 
        </div>
    )
}

export default RadioForm;