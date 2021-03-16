import React, { useState } from 'react'

import Character from "./Character"

const TextInput = (props) => {
    const { text, setText } = props

    const handleInput = (event) => {
        setText(event.target.value)
    }

    Character[props.data.field] = text

    return (
        <label>
            {props.data.label}
            <input
                type="text"
                className={props.data.className}
                value={text}
                onChange={handleInput}
            />
        </label>
    )
}

export default TextInput