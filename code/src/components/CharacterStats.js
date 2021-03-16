import React from "react"

import Character from "./Character"

const CharacterStats = (props) => {
    return (
        <div className="character-stats">
            <p>Strength: {Character.strength}</p>
            <p>Intelligence: {Character.intelligence}</p>
            <p>Dexterity: {Character.dexterity}</p>
        </div>
    )
}

export default CharacterStats