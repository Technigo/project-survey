import React from "react"

export const Dropdown = ({ item }) => {
    return (
        <>
            <select>
                <option value="">Select your favourite...</option>
                {item.options.map((option) => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </>
    )
}