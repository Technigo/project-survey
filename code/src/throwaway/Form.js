import React, { Component, useState} from "react";

import FirstQ from "./FirstQ";
import SecondQ from "./SecondQ";
import ThirdQ from "./ThirdQ";
import FourthQ from "./FourthQ";
import Overview from "./Overview";


const Form = () => {
    const [nameInput, setNameInput] = useState('');
    const [surnameInput, setSurnameInput] = useState('');
    const [happiness, setHappiness] = useState('happy');
    const [flavour, setFlavour] = useState('');
    const [step, setStep] = useState(1);

    const onNameInputChange = (event) => {
        setNameInput(event.target.value)
    }

    const onSurnameInputChange = (event) => {
        setSurnameInput(event.target.value)
    }

    const onHappinessChange = (feeling) => {
        setHappiness(feeling)
    }

    const onFlavourChange = (flavour) => {
        setFlavour(flavour)
    }

    const onStepChange = () => {
        setStep(step + 1)
    }

    return (
    <div>
        {step === 1 && (<FirstQ 
         nameInput={nameInput}
         onNameInputChange={onNameInputChange}
         onStepChange={onStepChange}
         />
        )}

        {step === 2 && (<SecondQ 
         surnameInput={surnameInput}
         onSurnameInputChange={onSurnameInputChange}
         onStepChange={onStepChange}
         />
        )}

        {step === 3 && (<ThirdQ
        happiness={happiness}
        onHappinessChange={onHappinessChange}
        onStepChange={onStepChange}
        />
        )}

        {step === 4 && (<FourthQ
        flavour={flavour}
        onFlavourChange={onFlavourChange}
        onStepChange={onStepChange}
        />
        )}

        {step === 5 && (<Overview 
        nameInput={nameInput}
        surnameInput={surnameInput}
        flavour={flavour}
        />  
        )}
    </div>
    );
};


    export default Form;