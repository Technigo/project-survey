import React from "react"

import Character from "./Character"

const CharacterBase = (props) => {
    return (
        <div className="character-base">
            <p>Name: {props.text}</p>
            <p>Race: {Character.race}</p>
            <p>Class: {Character.class}</p>
            <p>Age: {props.number}</p>
            <p>Family: {Character.family}</p>
            <p>Goal: {Character.goal}</p>
            <img src={Character.icon} />
        </div>
    )
}

export default CharacterBase