import React from 'react'

const TextInputOne = ({labelText, id, setFirstThought}) => {
    const onThoughtChange = (e) => {
        setFirstThought(e.target.value)
    } 
    return (
        <>
            <label className="label-text" htmlFor={id}>{labelText}</label>
            <input className="input-box" id={id} onChange={onThoughtChange}></input>
        </>
    )
}

export default TextInputOne;