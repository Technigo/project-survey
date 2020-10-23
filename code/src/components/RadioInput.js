import React from 'react';

const footprints = ["1", "2", "3", "4", "5"];


export const RadioInput = ({question, radioValue, setRadioValue, showNext}) => {


    return (

        <div className="radio">
            <h3>{question}</h3>
            <div className="radio-options">
            {footprints.map(group => (
                <label key={group} className="radio-label">
                {group}
                <input 
                    type="radio"
                    value={group}
                    onChange={event => setRadioValue(event.target.value)}
                    checked={radioValue === group}
                />
                
                </label>
            ))}</div>
            <div className="radio-description"><p>Not really</p> <p>Definitly</p></div>
            <button className="next-button" onClick={showNext}>Next</button>
        </div>



        
    );
}

/* <form>
<h1>{ageGroup}</h1>
{ageGroups.map(group => (
    <label key={group} className="radio-label">
    <input 
        type="radio"
        value={group}
        onChange={event => setAgeGroup(event.target.value)}
        checked={ageGroup === group}
    />
    {group}
    </label>
))}

</form> */