import React from 'react';

//props title className and function???
const Button = (props) => {
    return (
        <button
            disabled={props.disabled}
            type="submit"
            onClick={() => {props.function(props.value)}}
        >
            {props.title}
        </button>
    )
}

export default Button;