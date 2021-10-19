import React, { useState } from 'react';

import Intro from './Intro';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';



const Survey = () => {
    const [traditionInput, setTraditionInput] = useState('');
    const [treeInput, setTreeInput] = useState('');
    const [foodInput, setFoodInput] = useState('');
    const [whoInput, setWhoInput] = useState('');
    const [movieInput, setMovieInput] = useState('');
    const [step, setStep] = useState(1);

    const onTraditionInputChange = (event) => {
        setTraditionInput(event.target.value); 
    };

    const onTreeInputChange = (event) => {
            setTreeInput(event.target.value); 
        };

    const onFoodInputChange = (event) => {
        setFoodInput(event.target.value);
    };

    const onWhoInputChange = (event) => {
        setWhoInput(event.target.value);
    };

    const onMovieInputChange = (event) => {
        setMovieInput(event.target.value);
    };

    const onStepChange = () => {
        setStep(step + 1);
    };

    return (
        <div>
           {step === 1 && (
               <Intro
               onStepChange={onStepChange}
               />
           )}
           {step === 2 && (
               <Question1
               tradition={traditionInput}
               onTraditionInputChange={onTraditionInputChange}
               onStepChange={onStepChange}
               />
           )}
            {step === 3 && (
               <Question2
               tree={treeInput}
               onTreeInputChange={onTreeInputChange}
               onStepChange={onStepChange}
               />
           )}
            {step === 4 && (
               <Question3
               food={foodInput}
               onFoodInputChange={onFoodInputChange}
               onStepChange={onStepChange}
               />
           )}
            {step === 5 && (
               <Question4
               who={whoInput}
               onWhoInputChange={onWhoInputChange}
               onStepChange={onStepChange}
               />
           )}
            {step === 6 && (
               <Question5
               movie={whoInput}
               onMovieInputChange={onMovieInputChange}
               onStepChange={onStepChange}
               />
           )}

        </div>
    );
};

export default Survey;