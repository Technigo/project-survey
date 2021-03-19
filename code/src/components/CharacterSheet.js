import React from "react"

const CharacterSheet = (props) => {
    return (
        <div className="character-sheet">
            <div className="character-base">
                <div>
                    <p>Name: <span className="character-sheet-input">{props.name}</span></p>
                    <p>Race: <span className="character-sheet-input">{props.race}</span></p>
                    <p>Class: <span className="character-sheet-input">{props.class}</span></p>
                    <p>Age: <span className="character-sheet-input">{props.number}</span></p>
                    <p>Family: <span className="character-sheet-input">{props.family}</span></p>
                    <p>Goal: <span className="character-sheet-input">{props.goal}</span></p>
                </div>
                <div className="character-icon-container">
                    <img src={props.icon} className="character-icon" alt="character icon" />
                </div>
            </div>
            <div className="character-stats">
                <p>Strength: {props.str}</p>
                <p>Intelligence: {props.int}</p>
                <p>Dexterity: {props.dex}</p>
                <p>Charisma: {props.chr}</p>
            </div>
        </div>
    )
}

export default CharacterSheet