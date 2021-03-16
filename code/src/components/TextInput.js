import React, { useState } from 'react'

import Character from "./Character"

const TextInput = (props) => {
    const [text, setText] = useState("")

    const handleInput = (event) => {
        setText(event.target.value)
    }

    Character[props.field] = text

    return (
        <label>
            {props.label}
            <input
                type="text"
                className={props.className}
                value={text}
                onChange={handleInput}
            />
        </label>
    )
}

export default TextInput