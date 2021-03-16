import React, { useState } from "react"

import Character from "./Character"

const RadioInput = () => {
    const [characterRace, setCharacterRace] = useState("")

    const handleChange = (event) => {
        setCharacterRace(event.target.value)
    }

    Character.race = characterRace

    return (
        <div>
            Race:
            <label>
                <input
                    type="radio"
                    value="orc"
                    onChange={handleChange}
                    checked={characterRace === "orc"}
                />
                Orc
            </label>
            <label>
                <input
                    type="radio"
                    value="human"
                    onChange={handleChange}
                    checked={characterRace === "human"}
                />
                Human
            </label>
            <label>
                <input
                    type="radio"
                    value="dwarf"
                    onChange={handleChange}
                    checked={characterRace === "dwarf"}
                />
                Dwarf
            </label>
        </div>
    )
}

export default RadioInput