import React from 'react'
import "./Radio.css"


export const Radio = (props) => {

    return (
        <div className="duration">
        <h3> For how long will you travel? </h3>
        <label>
            <input 
            type="radio"
            value="7-14 days"
            onChange={event => props.onChanged(event.target.value)}
            checked={props.value === "7-14 days"}
            />
            7-14 days
        </label>
        <label>
            <input 
            type="radio"
            value="14-21 days"
            onChange={event => props.onChanged(event.target.value)}
            checked={props.value === "14-21 days"}
            />
            14-21 days
        </label>
        <label>
            <input 
            type="radio"
            value="21-28 days"
            onChange={event => props.onChanged(event.target.value)}
            checked={props.value === "21-28 days"}
            />
            21-28 days
        </label>
        <label>
            <input 
            type="radio"
            value="longer then 28 days"
            onChange={event => props.onChanged(event.target.value)}
            checked={props.value === "longer then 28 days"}
            />
            longer then 28 days
        </label>
        </div>
    )
    
}