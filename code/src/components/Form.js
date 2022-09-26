import React, { useState } from 'react';
import StartPage from './StartPage';
import NameQuestion from './NameQuestion';
// import SelectQuestion from './SelectQuestion';
// import RadioButtons from './RadioButtons';

const Form = () => {
    const [nameInput, setNameInput] = useState('')
    
    const [step, setStep] = useState(1);

    const onNameInputChange = (event) => {
        setNameInput(event.target.value)
    }
    const onStepChange = () => {
		setStep(step + 1);
	};

    return (
		<div>
			{step === 1 && <StartPage onStepChange={onStepChange} />}
			{step === 2 && (
                <NameQuestion
                />
            )}
        </div>
    );
}

export default Form;