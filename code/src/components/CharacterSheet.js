import React from "react"

import CharacterBase from "./CharacterBase"
import CharacterStats from "./CharacterStats"

const CharacterSheet = (props) => {
    return (
        <div className="character-sheet">
            <CharacterBase text={props.text} number={props.number} />
            <CharacterStats />
        </div>
    )
}

export default CharacterSheet