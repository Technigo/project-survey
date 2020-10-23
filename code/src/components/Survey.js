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

    const [section, setSection] = useState('question1');

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSubmit(true);
        window.location.href="#results";
    }

    const showForm = () => {
        setIsSubmit(false);
    }

    const showNextQuestion = (next) => {
        setSection(next)
    } 


    if (isSubmit === false){
        return (
            <>
                <form className="main-form" onSubmit={handleSubmit} id="main-form">
                    
                    {section === 'question1' && (
                    <>
                    <h2>Generel info</h2>
                    <div className="question-section">
                    <TextInput 
                    question="What is your name?" 
                    inputAnswer={name} 
                    inputSet={setName} 
                    showNext={() => showNextQuestion('question2')}/>
                    </div>
                    </>
                    
                    )}

                    {section === 'question2' && (
                    <>
                    <h2>Generel info</h2>
                    <div className="question-section">
                    <RadioInput 
                    question="Are you concerned about the climate change?" 
                    radioValue={footprint} 
                    setRadioValue={setFootprint} 
                    showNext={() => showNextQuestion('question3')}/>
                    </div>
                    </>
                    )}
                    
                    {section === 'question3' && (
                    <>
                    <h2>Housing</h2>
                    <div className="question-section">
                    <TextInput 
                    question="Where do you live?" 
                    inputAnswer={city} 
                    inputSet={setCity} 
                    showNext={() => showNextQuestion('question4')} />
                    </div>
                    </>
                    )} 
                    
                    {section === 'question4' && (
                    <>
                    <h2>Housing</h2>
                    <div className="question-section">
                    <SelectInput 
                    question="Do you live in a house or apartment?" 
                    selectValue={housing} 
                    setSelectValue={setHousing} 
                    showNext={() => showNextQuestion('question5')} />
                    </div>
                    </>
                    )}
                    {section === 'question5' && (
                    <>
                    <h2>Housing</h2> 
                    <div className="question-section">   
                    <RadioInput 
                    question="I always turn off the light when leaving a room." 
                    radioValue={lights} 
                    setRadioValue={setLights}showNext={() => showNextQuestion('question6')} />
                    </div>
                    </>
                    )}
                {section === 'question6' && (
                     <div className="question-section">

                    <input type="submit" value="Submit" className="button"/> 
                    </div>
                    )}
                </form>
            </>
        ); }

    else 
        return ( 
            <section className="results" id="results">
                <h2>Hi {name}</h2>
                <h3>Thank you for answering our survey. Below you can find a summary of your anwsers.</h3>
                <div className="answers">
                        <p>Your concern about climate change: <span className="result-span"> {footprint}/5</span></p>
                        <p>Your living situation: <span className="result-span"> {housing}</span></p>
                        <p>Your habits concering lights: <span className="result-span"> {lights}/5</span></p>
                        <p>Your concern about climate change: <span className="result-span"> {footprint}/5</span></p>
                </div>
                <button className="button" onClick={showForm}>Back</button>
            </section>
            
        );
}
