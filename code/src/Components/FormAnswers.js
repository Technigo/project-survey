import React, { useState } from 'react';
import SurveyRadio from './Components/SurveyRadio.js';
import Summary from './Components/Summary.js';



const FormAnswers = () => {
    const [hideForm, sethideForm] = useState(false);
    const [typeOfLiving, settypeOfLiving] = useState('')

    const handleAnswer1 = (newtypeOfLiving) => {
        settypeOfLiving(newtypeOfLiving)
    }

}
const onSubmit = (event) => {
    sethideForm(true);
}

if (hideForm === true) {
    return (
        <Summary
        />
    );
}

const Answer1={typeOfLiving}
return (
    <div>
        <form onSubmit={onSubmit}>
            {!hideForm && (
                <div>
                    <SurveyRadio Answer1={typeOfLiving} onAnswerChange={handleAnswer1} />
                </div>
            )}
            

            <button type="submit" onClick={(event) => onSubmit()}>
                Submit
            </button>


        </form>
    </div>
)

