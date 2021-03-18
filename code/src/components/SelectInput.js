import React from "react"

const SelectInput = (props) => {
    const { choice, setChoice } = props

    const handleChange = (event) => {
        setChoice(event.target.value)
    }

    return (
        <div className="input-container">
            <h2>{props.data.label}</h2>
            <select
                onChange={handleChange}
                value={choice}
                className={props.data.className}
            >
                <option disabled>
                </option>
                {props.data.choices.map(item =>
                    <option key={item}>
                        {item}
                    </option>
                )}
            </select>
        </div>
    )
}

export default SelectInput