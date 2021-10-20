import React, { useState } from 'react';

import Intro from './Intro';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Overview from './Overview';



const Survey = () => {
    const [traditionInput, setTraditionInput] = useState('');
    const [treeInput, setTreeInput] = useState('');
    const [foodInput, setFoodInput] = useState('');
    const [movieInput, setMovieInput] = useState('');
    const [step, setStep] = useState(1);

    const onTraditionInputChange = (event) => {
        setTraditionInput(event.target.value); 
    };

    const onTreeInputChange = (treeInput) => {
            setTreeInput(treeInput); 
        };

    const onFoodInputChange = (event) => {
        setFoodInput(event.target.value);
    };

    const onMovieInputChange = (movieInput) => {
        setMovieInput(movieInput);
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
               movie={movieInput}
               onMovieInputChange={onMovieInputChange}
               onStepChange={onStepChange}
               />
           )}
            {step === 6 && (
               <Overview
                traditionInput={traditionInput}
                treeInput={treeInput}
                movieInput={movieInput}
                />
           )}

        </div>
    );
};

export default Survey;