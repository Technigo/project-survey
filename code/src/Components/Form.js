import React from 'react'
import './form.css'

export const Name = (props) => {
    const { name, setName } = props
    return (
        <div>
            <p>Please enter your name: {name}</p>
            <input
                type="text"
                onChange={event => setName(event.target.value)}
                value={name}
            />
        </div>
    );
};
const codingLevels = ["Beginner", "Intermediate", "Advanced"];

export const Level = (props) => {
    const { codingLevel, setCodingLevel } = props

    return (
        <div>
            <p>Your coding level:</p>
            {codingLevels.map(level => (
                <label key={level}>
                    <input
                        type="radio"
                        value={level}
                        onChange={event => setCodingLevel(event.target.value)}
                        checked={codingLevel === level}
                    />
                    {level}
                </label>
            ))}
        </div>
    );
};
export const Destination = (props) => {
    const { destination, setDestination } = props

    return (
        <select
            onChange={event => setDestination(event.target.value)}
            value={destination}
        >
            <option value="">Select destination</option>
            <option value="Åre">Åre</option>
            <option value="Funäsdalen">Funäsdalen</option>
            <option value="Abisko">Abisko</option>
        </select>
    );
};

export const Button = (props) => {
    const { formValue, setFormValue } = props
    return (
        <button type="submit" onChange={event => setFormValue(event.target.value)}
            value={formValue}>Sign me up
        </button>
    );
};
