import React from 'react'

const Button = (props) => {

    return (
        <button
            type="submit"
            className="button"
            tabIndex='0'
            aria-label={props.labelText}
            >{props.text}
        </button>
    )
}

export default Button