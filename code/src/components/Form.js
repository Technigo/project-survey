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
  const [step, setStep] = useState(1);

const onNameInputChange = (event) => {
    setNameInput(event.target.value);
};

const onSurnameInputChange = (event) => {
  setSurnameInput(event.target.value);
};

const onSeasonInputChange = (event) => {
  setSeasonInputChange(event.target.value);
}

const // I will continue here with the third question

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
        SeasonInputChange={SeasonInputChange}
        onSeasonInputChange={onSeasonInputChange}
        onStepChange={onStepChange}
      />
    )} 
    {step === 4 && (
      <ThirdQuestion //radio button
        nameInput={nameInput}
        surnameInput={surnameInput}
        season={season.value}
      />
    )}
    {step === 5 && (
      <Overview //submitting all values
        nameInput={nameInput}
        surnameInput={surnameInput}
        season={season.value}

      />
    )}
  </div>  
); 
}; 

export default Form;