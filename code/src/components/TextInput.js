import React, { useState } from 'react'

import Character from "./Character"

const TextInput = () => {
    const [characterName, setCharacterName] = useState("")

    const handleInput = (event) => {
        setCharacterName(event.target.value)
    }

    Character.name = characterName

    return (
        <>
            <label>
                Name:
            <input
                    type="text"
                    value={characterName}
                    onChange={handleInput}
                />
            </label>
            <p>{characterName}</p>

        </>
    )
}

export default TextInput