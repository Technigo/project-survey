import React from 'react'

export const Checkbox = (props) => {
    return (
        <>
            <h2>{props.question}</h2>
                <label>
                    <input
                        type="checkbox"
                        value={props.one}
                        checked={props.checkboxOne}
                        onChange={(event) => props.setCheckboxOne(event.target.checked)}
                    />{props.one}</label>
        </>
    )
}