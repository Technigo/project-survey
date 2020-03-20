import React from 'react'

const placesGroups = [
    "In the shower",
    "In the club",
    "In the car",
    "On stage"
];

export const CheckedboxForm = ({title, place, setPlace }) => {

    return (

        <article>
            <h1>{title}</h1>
            {placesGroups.map(group => (
                <label className="labelName" key={group}>
                    {group}
                    <input className="checkButtons"
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


