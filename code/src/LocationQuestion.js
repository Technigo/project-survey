import React from 'react'


export const LocationQuestion = (props) => {
    return(
    <label>
        Where do you live?
        <input className = "input-location"
            type="text"
            value={props.location}
            onChange={event => props.setLocation(event.target.value)}
            required
          />
    </label>
    )
}