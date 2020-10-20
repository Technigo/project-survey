import React, { useState } from "react"

export const Radio = ({ item }) => {
    const [ numberOfBooks, setNumberOfBooks ] = useState();

    return (
        <>
        {item.options.map((numberGroup) => (
            <label key={numberGroup}>
                <input
                    type="radio"
                    value={numberGroup}
                    onChange={event => setNumberOfBooks(event.target.value)}
                    checked={numberOfBooks === numberGroup}
                />
                {numberGroup}
            </label>
        ))}
        </>
    )
}