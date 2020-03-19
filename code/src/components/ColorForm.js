import React from 'react'

const placesGroups = [
    "In the shower",
    "In the club",
    "In the car",
    "I'm a singer, so on stage"
];

export const ColorForm = ({ title, place, setPlace }) => {

    return (

        <article className="custom-Cb">
            <h1>{title}</h1>
            {placesGroups.map(group => (
                <label key={group}>
                    {group}
                    <input
                        type="checkbox"
                        value={group}
                        onChange={event => setPlace(event.target.value)}
                        checked={place === group}
                    />
                </label>
            ))}
        </article>

    );
}


