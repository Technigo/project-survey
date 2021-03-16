import React, { useState } from 'react'

import Character from "./Character"

const TextInput = (props) => {
    const [text, setText] = useState("")

    const handleInput = (event) => {
        setText(event.target.value)
    }

    Character[props.field] = text
    // const newObject = {
    //     [props.field]: text
    // }
    // Character.push(newObject)

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