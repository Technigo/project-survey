import React from 'react'

const TextInputTwo = ({labelText, id, setSocietysPortrayal}) => {
    const onThoughtChange = (e) => {
        setSocietysPortrayal(e.target.value)
    } 
    return (
        <div>
            <label htmlFor={id}>{labelText}</label>
            <input id={id} onChange={onThoughtChange}></input>
        </div>
    )
}

export default TextInputTwo;