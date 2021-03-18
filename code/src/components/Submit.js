import React, {useState} from 'react'

import Input from 'Input';
import Radio from 'Radio';
import Select from 'Select';

const [inputName, setInputName] = useState ('');
const [inputCharacteristics, setInputCharacteristics] = useState ('')
const [worldNeeds, setWorldNeeds] = useState ('');

const Submit = () => {
const isSurveyComplete = () => {
    if (inputName === ''){
        return false;
    }
    if (inputCharacteristics === ''){
        return false;
    }
    if (worldNeeds === ''){
        return false;
    }
    return true;
};

if (isSurveyComplete()){
    console.log('Survey complete')
}
}
export default Submit;