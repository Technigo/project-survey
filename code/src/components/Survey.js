import React, {useState} from 'react';

import {TextInput} from './TextInput';
import {RadioInput} from './RadioInput';
import SelectInput from './SelectInput';



export const Survey = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [housing, setHousing] = useState('');
    const [footprint, setFootprint] = useState('');
    const [lights, setLights] = useState('');

    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSubmit(true);
    }



    if (isSubmit === false){

    return (
        <>
        <form className="main-form" onSubmit={handleSubmit}>

            <TextInput question="What is your name?" inputAnswer={name} inputSet={setName} />

            <RadioInput question="Are you concerned about the climate change?" radioValue={footprint} setRadioValue={setFootprint}/>

            <h2>Housing</h2>

            <TextInput question="Where do you live?" inputAnswer={city} inputSet={setCity} />

            <SelectInput question="Do you live in a house or apartment?" selectValue={housing} setSelectValue={setHousing} />

            <RadioInput question="I always turn off the light when leaving a room." radioValue={lights} setRadioValue={setLights}/>

        
            <input type="submit" value="Submit" className="submit-button"/>
        </form>

        <div><p>Name: {name}, I live: {housing}, in a:{footprint}, My footprint:{city}</p></div>
        </>
    ); }

    else 
            return ( 
            <div>
             <h2>Hi {name}</h2>
             <h3>Thank you for answering our survey. Below you can find a summary of your anwsers.</h3>
            <p>Your concern about climate change: {footprint}/5</p>
            <p>Your living situation: {housing}</p>
            <p>Your habits concering lights: {lights}/5</p>
            <p>Your concern about climate change: {footprint}/5</p>
            
            </div>
            
            );
}
