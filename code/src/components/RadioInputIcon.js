import React from "react"

const RadioInputIcon = (props) => {
    const { choice, setChoice } = props

    const handleChange = (event) => {
        setChoice(event.target.value)
    }

    return (
        <div>
            Race:
            {props.data.source.map(item =>
                <label key={item}>
                    <img src={item} className="character-icon" alt="character icon" />
                    <input
                        type="radio"
                        value={item}
                        onChange={handleChange}
                        checked={choice === item}
                    />
                </label>
            )}
        </div>
    )
}

export default RadioInputIcon