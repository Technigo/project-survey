import React from 'react'

const Button = ({onClickFunction, buttonText}) => {
    return (
        <div>
            <button className="button" type="submit" onClick={onClickFunction}>
            {buttonText}
            </button>
        </div>
    )
}
export default Button;