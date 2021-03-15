import React, {useState} from 'react'
import './RadioButtons.css'

const RadioButtons = () =>{
    const ageGroups = [
        '0-18',
        '19-30',
        '30+'
    ]
    const [ageGroup, setAgeGroup] = useState('')
    return(
        <>
        <h2>How old are you?</h2>
        <form onSubmit={event => event.preventDefault()}>
            Age Group:
            {ageGroups.map(group => (
             <label key={group}> 
                <input
                    type='radio'
                    value={group}
                    onChange={event => setAgeGroup(event.target.value)}
                    checked={ageGroup === group}
                />
                {group}
             </label>  
             ))}
        </form>
            <p>you are between {ageGroup} old</p>
        </>
    )
}

export default RadioButtons