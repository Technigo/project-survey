import React, {useState} from 'react';

import {TextInput} from './TextInput';
import {RadioInput} from './RadioInput';
import SelectInput from './SelectInput';



export const Survey = () => {
    const [name, setName] = useState('');
    const [something, setSomething] = useState('');
    const [footprint, setFootprint] = useState('');
    const [city, setCity] = useState('');

    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSubmit(true);
    }



    if (isSubmit === false){

    return (
        <form className="main-form" onSubmit={handleSubmit}>

            <TextInput question="What is your name?" inputAnswer={name} inputSet={setName} />

            <TextInput question="Type something" inputAnswer={something} inputSet={setSomething} />

            <RadioInput radioValue={footprint} setRadioValue={setFootprint}/>

            <SelectInput selectValue={city} setSelectValue={setCity} />
        
            <input type="submit" value="Submit"/>
        </form>

    ); }

    else 
            return ( 
            <div>
             <p>{name}, {something}, {footprint}, {city}</p>
            
            </div>
            
            );
}
