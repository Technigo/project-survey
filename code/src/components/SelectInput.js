import React, { useState } from "react"

import Character from "./Character"

const SelectInput = () => {
    const [characterClass, setCharacterClass] = useState("")

    const handleChange = (event) => {
        setCharacterClass(event.target.value)
    }

    Character.class = characterClass

    return (
        <>
            <select
                onChange={handleChange}
                value={characterClass}
            >
                <option value="mage">Mage</option>
                <option value="thief">Thief</option>
                <option value="knight">Knight</option>
            </select>

        </>
    )
}

export default SelectInput