import React from 'react';

import TextInputName from './TextInputName'
import Selector from './Selector';
import Range from './Range'

const Form = (props) => {
    return (
        <div className="form-wrapper">
            <h2 className="form-title">{props.title}</h2>
            <TextInputName label="Name"/>
            <Selector array={props.catBreeds} label ="Choose a breed"/>
            <Range question="How do you feel about the survey?"/>
        </div>
    )
}
export default Form