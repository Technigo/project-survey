import React from 'react'

const RadioButton = ({labelText, id, name, setRadioValue}) => {
    const onRadioValueChange = (e) => {
        setRadioValue(e.target.value)
    }
    return (
        <div>
            <label htmlFor={id}>{labelText}</label>
            <input 
                type="radio"
                id={id} 
                name={name}
                onChange={onRadioValueChange}
                value={id}
            />
        </div>
    )
}
export default RadioButton