import React, { useState } from 'react'

const travelWays = ['By train', 'By car', 'By plane', 'Other']

const Travel = ({travelWay, ontravelWayChange, onStepChange}) => {
    // const [travelWay, settravelWay] = useState()

    return (
        <form>
            How did you travel to our event?
            {travelWays.map(trip => ( 

            <label key={trip}>
                <input
                type="radio"
                value={trip}
                onChange={event => ontravelWayChange(event.target.value)}
                checked={travelWay === trip}
                />
                {trip}
            </label>
            ))}
               <button onClick={onStepChange}>Continue</button>
        </form>
    )
}

export default Travel