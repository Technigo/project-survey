import React from 'react'

const Button = (props) => {
    console.log(props)

    return (
        <div>
            <button
                type="submit"
                className="button"
                tabIndex='0'
                aria-label={props.labelText}
            >{props.text}
            </button>
        </div>
    )
}

export default Button