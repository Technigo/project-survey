import React, { useState } from 'react';

import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import FourthQuestion from './FourthQuestion'
import Slider from './Slider'
import Summary from './Summary';
import SubmitButton from './SubmitButton';

import 'styles/form.css';


const Form = () => {
    /* State hooks */

    const [nameInput, setNameInput] = useState('');
    const [experience, setExperience] = useState('');
    const [pastry, setPastry] = useState('');
    const [date, setDate] = useState('');
    const [happiness, setHappiness] = useState('');
    const [showSummary, setShowSummary] = useState(false);
    /* Functions for handling input from form */

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

    const onHappinessSet = (event) => {
        setHappiness(event.detail.value);
    };

    const onShowSummary = () => {
        if (nameInput === '') {
            alert('Name is required')
        }
        else if (date === '') {
            alert('Date is requierd')
        }
        else {
            setShowSummary(true);
        }
    }

    // v1
    return (
        <div id="form">
            {showSummary === false && (
                <>
                    <FirstQuestion
                        nameInput={nameInput}
                        onNameInputChange={onNameInputChange}
                    />

                    <SecondQuestion
                        experience={experience}
                        setExperience={onExperienceInputChange}
                    />

                    <ThirdQuestion
                        chosenPastry={pastry}
                        setPastry={onPastryInputChange}
                    />

                    <FourthQuestion
                        selected={date}
                        onSelect={onDateInputChange} //when day is clicked
                    />

                    <Slider
                        happiness={happiness}
                        setHappiness={onHappinessSet}
                    />

                    <SubmitButton
                        onSetShowSummary={onShowSummary}
                    />

                </>
            )}

            {showSummary === true && (
                <Summary nameInput={nameInput} experience={experience} chosenPastry={pastry} date={date}

                />
            )}
        </div>
    );
};

export default Form;