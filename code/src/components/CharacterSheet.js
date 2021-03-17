import React from "react"

import CharacterBase from "./CharacterBase"
import CharacterStats from "./CharacterStats"

const CharacterSheet = (props) => {
    return (
        <div className="character-sheet">
            <CharacterBase
                name={props.name}
                number={props.number}
                class={props.class}
                race={props.race}
                family={props.family}
                goal={props.goal}
                icon={props.icon}
            />
            <CharacterStats />
        </div>
    )
}

export default CharacterSheet