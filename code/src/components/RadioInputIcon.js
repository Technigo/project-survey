import React from "react"

const RadioInputIcon = ({ choice, setChoice, data, characterClass }) => {

    const handleChange = (event) => {
        setChoice(event.target.value)
    }

    let source

    if (data.field === "equipment") {
        if (characterClass === "thief") {
            source = data.source.thief
        } else if (characterClass === "mage") {
            source = data.source.mage
        } else if (characterClass === "knight") {
            source = data.source.knight
        } else if (characterClass === "healer") {
            source = data.source.healer
        } else if (characterClass === "ranger") {
            source = data.source.ranger
        }
    } else {
        source = data.source
    }

    if (data.field === "equipment" && characterClass === "") {
        return (
            <div className="input-container">
                <h2>{data.label}</h2>
                <p>You need to choose a class before you can choose your equipment.</p>
            </div>
        )
    } else {
        return (
            <div className="input-container">
                <h2>{data.label}</h2>
                <div className="icon-container">
                    {source.map(item =>
                        <label key={item}>
                            <img src={item} className="character-icon" alt={data.field} />
                            <input
                                type="radio"
                                value={item}
                                onChange={handleChange}
                                checked={choice === item}
                            />
                        </label>
                    )}
                </div>
            </div>
        )
    }
}

export default RadioInputIcon