import React from 'react';


const transportPreference = [
    'Train',
    'Boat',
    'Plane'
]

const Transportation= ({transportation, setTransportation}) => {

    return (
        <div className="questionWrapper">
        <form> 

            <p> How do you want to travel?</p>
            {transportPreference.map(travel => (
            

            <section className="radio-lable" key={travel}>
                <input
                className="radio-lable"
                type="radio"
                value={travel}
                onChange={event => setTransportation(event.target.value)}
                checked={transportation === travel}  
                />
                {travel}
            </section>
           
           ))}
        </form>
        </div>
    )}

export default Transportation;
