import React from 'react';
import SubmitIcon from './assets/submit.svg';

const SubmitButton = ({ counter, setCounter }) => {
    const Submit = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
         <button
         type="button"
         className="Btn"
         onClick={Submit}
         <img className="ButtonImage" src={SubmitIcon} alt="an icon that shows up in the end of the survey for submitting your answers" />
        </button>
    );
    };

export default SubmitButton;