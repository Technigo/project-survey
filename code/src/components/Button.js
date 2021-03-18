import React from 'react' 

const Button = ({buttonText, onPageChange, buttonType="button"}) => {
    return (
        <button onClick={onPageChange} type={buttonType}>
            {buttonText}
        </button>
    )
}

export default Button