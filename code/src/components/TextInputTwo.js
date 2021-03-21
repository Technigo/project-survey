import React from 'react'

const TextInputTwo = ({labelText, id, setSocietysPortrayal}) => {
    const onThoughtChange = (e) => {
        setSocietysPortrayal(e.target.value)
    } 
    return (
        <>
            <label className="label-text" htmlFor={id}>{labelText}</label>
            <input className="input-box" id={id} onChange={onThoughtChange}></input>
        </>
    )
}

export default TextInputTwo;