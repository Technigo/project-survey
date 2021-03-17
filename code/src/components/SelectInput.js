import React, {useState} from 'react'


const SelectInput = (props) => {
    return (
        <>
            <select className="select-dropdown">
            {props.generatedropdown.alternative}
            </select>
        </>
    )
}

export default SelectInput;