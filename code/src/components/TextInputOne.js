import React from 'react'

const TextInputOne = ({labelText, id, setFirstThought}) => {
    const onThoughtChange = (e) => {
        setFirstThought(e.target.value)
    } 
    return (
        <div>
            <label htmlFor={id}>{labelText}</label>
            <input id={id} onChange={onThoughtChange}></input>
        </div>
    )
}

export default TextInputOne;