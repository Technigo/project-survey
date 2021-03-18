import React from "react"

const RadioInput = (props) => {
    const { choice, setChoice } = props

    const handleChange = (event) => {
        setChoice(event.target.value)
    }

    return (
        <div className="input-container">
            <h2>{props.data.label}</h2>
            <div className="radio-button-container">
                {props.data.choices.map(item =>
                    <label key={item}>
                        <input
                            type="radio"
                            name={props.data.field}
                            value={item}
                            onChange={handleChange}
                            checked={choice === item}
                        />
                        {item}
                    </label>
                )}
            </div>
        </div>
    )
}

export default RadioInput