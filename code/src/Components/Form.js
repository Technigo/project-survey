import React from 'react'
import { useState } from "react"
import './form.css'

export const Name = () => {
    const [name, setName] = useState("")

    return (
        //prevents the page from re-rendering on submit
        <form onSubmit={event => event.preventDefault()}>
            <p>Please enter your name: {name}</p>
            <input
                type="text"
                onChange={event => setName(event.target.value)}
                value={name}
            />
        </form>
    );
};
const codingLevels = ["Beginner", "Intermediate", "Advanced"];

export const Level = () => {
    const [codingLevel, setCodingLevel] = useState();
    return (
        <form>
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
        </form>
    );
};
export const Destination = () => {
    const [destination, setDestination] = useState("");
    return (
        <form>
            <select
                onChange={event => setDestination(event.target.value)}
                value={destination}
            >
                <option value="">Select destination</option>
                <option value="åre">Åre</option>
                <option value="funäsdalen">Funäsdalen</option>
                <option value="abisko">Abisko</option>
            </select>
        </form>
    );
};

export const Button = () => {
    const [formValue, setFormValue] = useState("");
    return (
        <button onChange={event => setFormValue(event.target.value)}
            value={formValue}>Sign me up
        </button>

    );
};
