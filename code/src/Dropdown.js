import React, { useState } from "react"

export const Dropdown = ({ item }) => {
    const [ consumption, setConsumption ] = useState("");

    return (
        <>
            <select
                onChange={event => setConsumption(event.target.value)}
                value={consumption}
                >
                <option value="">Select...</option>
                {item.options.map((option) => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </>
    )
}