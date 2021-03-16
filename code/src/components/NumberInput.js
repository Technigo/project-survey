import React, { useState } from "react"

import Character from "./Character"

const NumberInput = () => {
    const [characterAge, setCharacterAge] = useState("")

    const handleChange = (event) => {
        setCharacterAge(event.target.value)
    }

    Character.age = characterAge

    return (
        <label>Age
            <input
                type="number"
                min="10"
                max="100"
                onChange={handleChange}
                value={characterAge}
            />
        </label>
    )
}

export default NumberInput