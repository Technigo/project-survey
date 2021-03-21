import React from 'react'

const SelectList = ({setDropDown, questionText}) => {
    const onDropDownChange = (e) => {
        setDropDown(e.target.value)
    }
    return (
        <>
        <h2>{questionText}</h2>
            <label htmlFor="Question">Question</label>
            <select className="select-list" id="Question" onChange={onDropDownChange}>
                <option>🕰️🧙‍♀️🌕🧙‍♀️🕰️</option>
                <option>0-5 years</option>
                <option>5-10 years</option>
                <option>10+ years</option>
            </select>
        </>
    )
}

export default SelectList 