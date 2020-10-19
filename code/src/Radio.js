import React, {useState} from 'react'
import "./Radio.css"


export const Radio = () => {
    const [duration, setDuration] = useState ("")

    return (
        <div className="duration">
        <h3> For how long will you travel? </h3>
        <label>
            <input 
            type="radio"
            value="7-14 days"
            onChange={event => setDuration(event.target.value)}
            checked={duration === "7-14 days"}
            />
            7-14 days
        </label>
        <label>
            <input 
            type="radio"
            value="14-21 days"
            onChange={event => setDuration(event.target.value)}
            checked={duration === "14-21 days"}
            />
            14-21 days
        </label>
        <label>
            <input 
            type="radio"
            value="21-28 days"
            onChange={event => setDuration(event.target.value)}
            checked={duration === "21-28 days"}
            />
            21-28 days
        </label>
        <label>
            <input 
            type="radio"
            value="longer then 28 days"
            onChange={event => setDuration(event.target.value)}
            checked={duration === "longer then 28 days"}
            />
            longer then 28 days
        </label>
        </div>
    )
    
}