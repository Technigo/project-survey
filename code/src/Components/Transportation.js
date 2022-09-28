import React from 'react';


const transportPreference = [
    'Train',
    'Boat',
    'Plane'
]

const Transportation= ({transportation, setTransportation}) => {

    return (
        <form>
            <p> How do you want to travel?</p>
            {transportPreference.map(travel => (
            <lable key={travel}>
                <input
                type="radio"
                value={travel}
                onChange={event => setTransportation(event.target.value)}
                checked={transportation === travel}  
                />
                {travel}
            </lable>
            ))}
        </form>
    )}

export default Transportation;
