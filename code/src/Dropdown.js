import React, { useState } from 'react'

export const Dropdown = (props) => {
    const [selectValue, setSelectValue] = useState();
    return (
        <form>
            <h2>{props.question}</h2>
            <select onChange={(event) => setSelectValue(event.target.value)}
                value={selectValue}>
                <option value={props.one}>{props.one}</option>
                <option value={props.two}>{props.two}</option>
                <option value={props.three}>{props.three}</option>
            </select>
        </form>
    )

}