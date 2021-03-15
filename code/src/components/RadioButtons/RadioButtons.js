import React, {useState} from 'react'
import './RadioButtons.css'

const RadioButtons = () =>{
    const [ageGroup, setAgeGroup] = useState('')
    return(
        <>
        <h2>How old are you?</h2>
        <form>
            Age Group:
            <label>
                <input
                type="radio"
                value="0-18"
                onChange={event => setAgeGroup(event.target.value)}
                checked={ageGroup === "0-18"}
                />
            0-18
            </label>
            <label>
                <input
                type="radio"
                value="19-30"
                onChange={event => setAgeGroup(event.target.value)}
                checked={ageGroup === "19-30"}
                />
            19-30
            </label>
            <label>
                <input
                type="radio"
                value="31-50"
                onChange={event => setAgeGroup(event.target.value)}
                checked={ageGroup === "31-50"}
                />
            31-50
            </label>
        </form>
        <p>you are between {ageGroup} old</p>
        </>
    )
}

export default RadioButtons