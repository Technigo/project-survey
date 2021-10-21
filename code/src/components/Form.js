import React, { useState } from 'react';

import Alert from './Alert';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import FourthQuestion from './FourthQuestion'
import Summary from './Summary';
import SubmitButton from './SubmitButton';
import 'styles/form.css';


const Form = () => {
    /* State hooks */

    const [alert, setAlert] = useState(false);
    const [nameInput, setNameInput] = useState('');
    const [experience, setExperience] = useState('');
    const [pastry, setPastry] = useState('');
    const [date, setDate] = useState('');
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

    const onShowSummary = (event) => {
        if (nameInput === '') {
            setAlert(true)
        }
        else if (date === '') {
            setAlert(true)
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
                    {alert && <Alert />}
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
                    {alert && <Alert />}

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