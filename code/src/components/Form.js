import React, {useState} from 'react';

import Welcome from './Welcome';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import Overview from './Overview';


const Form = () => {
  const [nameInput, setNameInput] = useState('');
  const [surnameInput, setSurnameInput] = useState ('');
  const [seasonInput, setSeasonInput] = useState('');
  const [temp, setTemp] = useState('');
  const [step, setStep] = useState(1);

const onNameInputChange = (event) => {
    setNameInput(event.target.value);
};

const onSurnameInputChange = (event) => {
  setSurnameInput(event.target.value);
};

const onSeasonInputChange = (event) => {
  setSeasonInput(event.target.value);
}

const onTempChange = (event) => {
  setTemp(event.target.value);
}

const onStepChange = () => {
    setStep(step + 1);
};

return (
  <div className="page">
    {step === 1 && (
      <Welcome 
        onStepChange={onStepChange}
      />
    )}    
    {step === 2 && (
      <FirstQuestion //name and surname input
        nameInput={nameInput} 
        onNameInputChange={onNameInputChange}
        surnameInput={surnameInput} 
        onSurnameInputChange={onSurnameInputChange}
        onStepChange={onStepChange}
      />
    )}
    {step === 3 && (
      <SecondQuestion //drop-down
        seasonInput={seasonInput}
        onSeasonInputChange={onSeasonInputChange}
        onStepChange={onStepChange}
      />
    )} 
    {step === 4 && (
      <ThirdQuestion //radio button
        temp={temp}
        onTempChange={onTempChange}
        onStepChange={onStepChange}
      />
    )}
    {step === 5 && (
      <Overview //submitting all values
        nameInput={nameInput}
        surnameInput={surnameInput}
        seasonInput={seasonInput}
        temp={temp}

      />
    )}
  </div>  
); 
}; 

export default Form;