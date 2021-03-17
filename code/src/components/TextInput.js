import React from 'react'

const TextInput = (props) => {
    const { text, setText } = props

    const handleInput = (event) => {
        setText(event.target.value)
    }

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