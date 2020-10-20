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
                <label>
                    <input
                        type="checkbox"
                        value={props.two}
                        checked={props.checkboxTwo}
                        onChange={(event) => props.setCheckboxTwo(event.target.checked)}
                    />{props.two}</label>
        </>
    )
}