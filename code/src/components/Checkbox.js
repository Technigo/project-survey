import React from 'react'

export const Checkbox = (props) => {
    return (
        <>
            <h2 tabIndex={'0'}>{props.question}</h2>
                <label htmlFor={'checkbox'}>
                    <input
                        tabIndex={'0'}
                        id={'checkbox'}
                        type={'checkbox'}
                        value={props.answer}
                        checked={props.checkbox}
                        onChange={(event) => props.setCheckbox(event.target.checked)}
                    />{props.answer}</label>
        </>
    )
};