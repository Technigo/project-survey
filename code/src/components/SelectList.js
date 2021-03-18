import React from 'react'

const SelectList = ({setDropDown}) => {
    const onDropDownChange = (e) => {
        setDropDown(e.target.value)
    }
    return (
        <div>
            <label htmlFor="Question">Question</label>
            <select id="Question" onChange={onDropDownChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>
    )
}

export default SelectList 