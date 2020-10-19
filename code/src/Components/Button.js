import React from 'react';

//props title className and function???
const Button = (props) => {
    return (
        <button
            className="button"
            disabled={props.disabled}
            type="submit"
            onClick={() => {props.function(props.value)}}
        >
            <span>{props.title}</span>
        </button>
    )
}

export default Button;