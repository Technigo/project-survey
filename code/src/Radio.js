import React from "react"

export const Radio = ({ item }) => {
    return (
        <>
        {item.options.map((numberGroup) => (
            <label key={numberGroup}>
                <input
                    type="radio"
                    value={numberGroup}
                />
                {numberGroup}
            </label>
        ))}
        </>
    )
}