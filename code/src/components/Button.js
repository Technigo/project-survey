import React from "react"

const Button = ({ button }) => {
    return (
        <div>
            <button
                className="button"
                type="submit">
                {button}
            </button>
        </div>
    )
}

export default Button