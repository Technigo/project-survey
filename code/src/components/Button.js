import React from "react"

const Button = ({ button, onStepChange }) => {
    return (
        <div>
            <button
                className="button"
                type="submit"
                onClick={onStepChange}>
                {button}
            </button>
        </div>
    )
}

export default Button