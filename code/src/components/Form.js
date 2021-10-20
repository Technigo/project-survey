import React, { Component, useState} from "react";

import NameQ from "./NameQ";
import AgeQ from "./AgeQ";
import StyleQ from "./StyleQ";
import MoodQ from "./MoodQ";
import CostumeQ from "./CostumeQ";
import Overview from "./Overview";


const Form = () => {
    const [nameInput, setNameInput] = useState('');
    const [ageInput, setAgeInput] = useState('');
    const [style, setStyle] = useState('');
    const [costume, setCostume] = useState('');
    const [mood, setMood] = useState('blood');
    const [step, setStep] = useState(1);

    const onNameInputChange = (event) => {
        setNameInput(event.target.value)
    }

    const onAgeInputChange = (event) => {
        setAgeInput(event.target.value)
    }

    const onStyleChange = (style) => {
        setStyle(style)
    }

    const onCostumeChange = (costume) => {
        setCostume(costume)
    }

    const onMoodChange = (mood) => {
        setMood(mood)
    }

    const onStepChange = () => {
        setStep(step + 1)
    }

    return (
    <div>
        {step === 1 && (<NameQ 
         nameInput={nameInput}
         onNameInputChange={onNameInputChange}
         onStepChange={onStepChange}
         />
        )}

        {step === 2 && (<AgeQ 
         ageInput={ageInput}
         onAgeInputChange={onAgeInputChange}
         onStepChange={onStepChange}
         />
        )}

        {step === 3 && (<StyleQ
        style={style}
        onStyleChange={onStyleChange}
        onStepChange={onStepChange}
        />
        )}

        {step === 4 && (<CostumeQ
        costume={costume}
        onCostumeChange={onCostumeChange}
        onStepChange={onStepChange}
        />
        )}

        {step === 5 && (<MoodQ
        mood={mood}
        onMoodChange={onMoodChange}
        onStepChange={onStepChange}
        />
        )}

        {step === 6 && (<Overview 
        nameInput={nameInput}
        ageInput={ageInput}
        style={style}
        costume={costume}
        mood={mood}
        />  
        )}
    </div>
    );
};


    export default Form;