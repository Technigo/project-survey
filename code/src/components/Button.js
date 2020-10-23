import React from 'react';
import './button.css'

export const Button = (props) => {
return <button tabIndex={'0'} type={props.type} onClick={props.click} disabled={props.disable}>{props.text}</button>
}

