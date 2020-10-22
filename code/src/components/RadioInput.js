import React from 'react';

const footprints = ["1", "2", "3", "4", "5"];


export const RadioInput = ({radioValue, setRadioValue}) => {


    return (

        <div>
            <p>In general, how much do you think about your carbon footprint? {radioValue}</p>
            
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
            ))}
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