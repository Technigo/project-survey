import React from 'react'

const TextInput = ({labelText, id}) => {
    return (
        <div>
            <label htmlFor={id}>{labelText}</label>
            <input id={id}></input>
        </div>
    )
}

export default TextInput;