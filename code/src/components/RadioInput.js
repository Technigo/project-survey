import React from "react"

const RadioInput = (props) => {
    const { choice, setChoice } = props

    const handleChange = (event) => {
        setChoice(event.target.value)
    }

    return (
        <div>
            Race:
            {props.data.choices.map(item =>
                <label key={item}>
                    <input
                        type="radio"
                        value={item}
                        onChange={handleChange}
                        checked={choice === item}
                    />
                    {item}
                </label>
            )}
        </div>
    )
}

export default RadioInput