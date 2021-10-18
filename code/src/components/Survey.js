import React, { useState } from 'react';

import Intro from './Intro';
import Question1 from './Question1';
/* import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import Overview from './Overview'; */

const Survey = () => {
    const [traditionInput, setTraditionInput] = useState('');
    const [step, setStep] = useState(1);

    const onTraditionInputChange = (event) => {
        setTraditionInput(event.target.value); 
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

        </div>
    );
};

export default Survey;