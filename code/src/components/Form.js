import React, { useState } from 'react';
import { ColorQuestion } from './ColorQuestion';
import { CountryQuestion } from './CountryQuestion';
import { NameQuestion } from './NameQuestion';
import { SummaryNameQuestion } from './SummaryNameQuestion';


export const Form = () => {
    const [counter, setCounter] = useState (0);

    const onCounterChanged = (event) => {
        event.preventDefault();
      setCounter(counter + 1);
   
    }
    if (counter === 0) {
        return (
            <form className="form-container" >
            <div className="form-container-questions">
            <NameQuestion/>
            <ColorQuestion/>
            <CountryQuestion/>
            <div>
            <button type="submit" onClick={onCounterChanged}>Submit!</button>
            </div>
            </div>
        </form>
        )
    } else {
        return(
            <SummaryNameQuestion/>
        )
    }

};