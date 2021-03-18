import React from 'react'

const TextInput = (props) => {
    const { text, setText } = props

    const handleInput = (event) => {
        setText(event.target.value)
    }

    return (
        <div className="input-container">
            <label htmlFor="text">
                <h2>{props.data.label}</h2>
            </label>
            <input
                id="text"
                type="text"
                className={props.data.className}
                value={text}
                onChange={handleInput}
            />
        </div>
    )
}

export default TextInput