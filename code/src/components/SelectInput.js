import React from "react"

const SelectInput = (props) => {
    const { choice, setChoice } = props

    const handleChange = (event) => {
        setChoice(event.target.value)
    }

    return (
        <select
            onChange={handleChange}
            value={choice}
            className={props.data.className}
        >
            <option >
                Pick a {props.data.field}!
            </option>
            {props.data.choices.map(item =>
                <option key={item}>
                    {item}
                </option>
            )}
        </select>
    )
}

export default SelectInput