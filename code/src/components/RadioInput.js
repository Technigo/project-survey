import React from 'react';

const radioValues = ["1", "2", "3", "4", "5"];


export const RadioInput = ({question, radioValue, setRadioValue, showNext}) => {
     return (

        <div className="radio">
            <h3>{question}</h3>
            <div className="radio-options">
                {radioValues.map(radioNumber => (
                    <label key={radioNumber} className="radio-label">
                        {radioNumber}
                        <input 
                            type="radio"
                            value={radioNumber}
                            onChange={event => setRadioValue(event.target.value)}
                            checked={radioValue === radioNumber}
                            required
                            name={radioNumber}
                            id={radioNumber}
                        />
                    </label>
                ))}
            </div>
            <div className="radio-description"><p>Not really</p> <p>Definitly</p></div>
            <button className="next-button" onClick={showNext}>Next</button>
        </div>



        
    );
}
