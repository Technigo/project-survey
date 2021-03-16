import React from "react"

import CharacterBase from "./CharacterBase"
import CharacterStats from "./CharacterStats"

const CharacterSheet = (props) => {
    return (
        <div className="character-sheet">
            <CharacterBase />
            <CharacterStats />
        </div>
    )
}

export default CharacterSheet