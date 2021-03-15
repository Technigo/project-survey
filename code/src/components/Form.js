import React from 'react';
import Selector from './Selector';

import TextInputName from './TextInputName'

const Form = (props) => {
    return (
        <div className="form-wrapper">
            <h2 className="form-title">{props.title}</h2>
            <TextInputName label="Name"/>
            <Selector array={props.catBreeds} label ="Choose a breed"/>
        </div>
    )
}
export default Form