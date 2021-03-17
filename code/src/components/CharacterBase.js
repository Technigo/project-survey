import React from "react"

const CharacterBase = (props) => {
    return (
        <div className="character-base">
            <p>Name: {props.name}</p>
            <p>Race: {props.race}</p>
            <p>Class: {props.class}</p>
            <p>Age: {props.number}</p>
            <p>Family: {props.family}</p>
            <p>Goal: {props.goal}</p>
            <img src={props.icon} className="character-icon" alt="character icon" />
        </div>
    )
}

export default CharacterBase