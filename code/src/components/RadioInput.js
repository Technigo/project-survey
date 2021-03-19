import React from "react"

const RadioInput = ({ choice, setChoice, data }) => {

    const handleChange = (event) => {
        setChoice(event.target.value)
    }

    return (
        <div className="input-container">
            <h2>{data.label}</h2>
            <div className="radio-button-container">
                {data.choices.map(item =>
                    <label key={item}>
                        <input
                            type="radio"
                            name={data.field}
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