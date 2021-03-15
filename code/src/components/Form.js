import React from 'react';

import TextInputName from './TextInputName'

const Form = (props) => {
    return (
        <div className="form-wrapper">
            <h2 className="form-title">{props.title}</h2>
            <TextInputName label="Name"/>
        </div>
    )
}
export default Form