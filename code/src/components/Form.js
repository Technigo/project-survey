import React, { useState } from 'react';


import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import FourthQuestion from './FourthQuestion'
import Summary from './Summary';

const Form = () => {
    const [nameInput, setNameInput] = useState('');
    const [experience, setExperience] = useState('');
    const [pastry, setPastry] = useState('');
    const [date, setDate] = useState('');
    const [step, setStep] = useState(1);

    const onNameInputChange = (event) => {
        setNameInput(event.target.value);
    };

    const onExperienceInputChange = (event) => {
        setExperience(event.target.value);
    };

    const onPastryInputChange = (event) => {
        setPastry(event.target.value);
    };

    const onDateInputChange = (event) => {
        setDate(event);
    };

    const onStepChange = () => {
        setStep(step + 1);
    };

    // v1
    return (
        <div>
            {step === 1 && (
                <FirstQuestion
                    nameInput={nameInput}
                    onNameInputChange={onNameInputChange}
                    onStepChange={onStepChange}
                />
            )}
            {step === 2 && (
                <SecondQuestion
                    experience={experience}
                    setExperience={onExperienceInputChange}
                    onStepChange={onStepChange}
                />
            )}

            {step === 3 && (
                <ThirdQuestion
                    chosenPastry={pastry}
                    setPastry={onPastryInputChange}
                    onStepChange={onStepChange}
                />
            )}

            {step === 4 && (
                <FourthQuestion
                    selected={date}
                    onSelect={onDateInputChange} //when day is clicked
                    onStepChange={onStepChange} //only when value has changed
                    />
                    )}


                { step === 5 && (
                    <Summary nameInput={nameInput} experience={experience} chosenPastry={pastry} date={date}
                    />
                )}
        </div>
    );
};

export default Form;