import React from "react"

import Character from "./Character"

const CharacterBase = (props) => {
    return (
        <div className="character-base">
            <p>Name: {Character.name}</p>
            <p>Race: {Character.race}</p>
            <p>Class: {Character.class}</p>
            <p>Age: {Character.age}</p>
            <p>Family: {Character.family}</p>
            <p>Goal: {Character.goal}</p>
        </div>
    )
}

export default CharacterBase