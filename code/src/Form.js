import React, {useState} from "react";

import FirstQuestion from './components/FirstQuestion';
import SecondQuestion from './components/SecondQuestion';
import ThirdQuestion from './components/ThirdQuestion';
import FourthQuestion from './components/FourthQuestion';
import FifthQuestion from './components/FifthQuestion';

const Form = () => {
    const [nameInput, setNameInput] = useState('');
    const [surnameInput, setSurnameInput] = useState('');
    const [step, setStep] = useState(1);
  
  
    const onNameInputChange = (event) => {
      setNameInput(event.target.value);
    };
  
    const onSurnameInputChange = (event) => {
      setSurnameInput(event.target.value);
    };

    const onStepChange = () => {
		setStep(step + 1);
	};

    return (
        <div>
        {step === 1 && (
            <FirstQuestion
                nameInput={nameInput}
                onNameInputChange={onNameInputChange}
                surname={surnameInput}
                onSurnameInputChange={onSurnameInputChange}
                onStepChange={onStepChange}
            />
        )}
        </div>
    )
}

export default Form;