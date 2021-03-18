import React from "react"

const CharacterSheet = (props) => {
    console.log(props.icon)
    return (
        <div className="character-sheet">
            <div className="character-base">
                <div>
                    <p>Name: {props.name}</p>
                    <p>Race: {props.race}</p>
                    <p>Class: {props.class}</p>
                    <p>Age: {props.number}</p>
                    <p>Family: {props.family}</p>
                    <p>Goal: {props.goal}</p>
                </div>
                <img src={props.icon} className="character-icon" alt="character icon" />
            </div>
            <div className="character-stats">
                <p>Strength: {props.str}</p>
                <p>Intelligence: {props.int}</p>
                <p>Dexterity: {props.dex}</p>
            </div>
        </div>
    )
}

export default CharacterSheet