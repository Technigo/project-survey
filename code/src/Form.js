import React, {useState} from "react";

import Intro from './components/Intro';
import FirstQuestion from './components/FirstQuestion';
import SecondQuestion from './components/SecondQuestion';
import ThirdQuestion from './components/ThirdQuestion';
import FourthQuestion from './components/FourthQuestion';
import Overview from './components/Overview';

const Form = () => {
    const [nameInput, setNameInput] = useState('');
    const [surnameInput, setSurnameInput] = useState('');
    const [rangeInput, setRangeInput] = useState('5');
    const [selectInput, setSelectInput] = useState('');
    const [radioInput, onRadioInputChange] = useState();
    const [step, setStep] = useState(0);
  

    const onNameInputChange = (event) => {
      setNameInput(event.target.value);
    };
  
    const onSurnameInputChange = (event) => {
      setSurnameInput(event.target.value);
    };

    const onRangeInputChange = (event) => {
      setRangeInput(event.target.value);
    };

    const onSelectInputChange = (event) => {
      setSelectInput(event.target.value)
    };

    const onStepChange = () => {
		setStep(step + 1);
	  };

    const onMinusStepChange = () => {
      setStep(step - 1);
    };

    

    return (
      
        <div className="question-box">
          {step === 0 && (
            <Intro 
            onStepChange={onStepChange}
            />
          )}

          {step === 1 && (
            <FirstQuestion
                nameInput={nameInput}
                onNameInputChange={onNameInputChange}
                surname={surnameInput}
                onSurnameInputChange={onSurnameInputChange}
                onStepChange={onStepChange}
                onMinusStepChange={onMinusStepChange}
            />
          )}

          {step === 2 && (
            <SecondQuestion
                rangeInput={rangeInput}
                onRangeInputChange={onRangeInputChange}
                onStepChange={onStepChange}
                onMinusStepChange={onMinusStepChange}
            />
          )}


          {step === 3 && (
            <ThirdQuestion
            selectInput={selectInput}
            onSelectInputChange={onSelectInputChange}
            onStepChange={onStepChange}
            onMinusStepChange={onMinusStepChange}
            />
            
          )}

          {step === 4 && (
            <FourthQuestion
            radioInput={radioInput}
            onRadioInputChange={onRadioInputChange}
            onStepChange={onStepChange}
            onMinusStepChange={onMinusStepChange}
            />
            
          )}


          {step === 5 && (
            <Overview
                nameInput={nameInput}
                surnameInput={surnameInput}
                rangeInput={rangeInput}
                selectInput={selectInput}
                radioInput={radioInput}
                
            />
          )}

        </div>
        
    )
}

export default Form;