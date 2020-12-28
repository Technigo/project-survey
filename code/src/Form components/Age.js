import React from 'react'

export const Age = ({age, setAge}) => {

    return (
        <fieldset className="container" tabindex="0">
            <legend>What's your age range?</legend>
            <div className="radio-button-row"  aria-label="18-30, 30-40, 40-50 or 50+" role="radiogroup" tabindex="0"> 
                <label aria-label="Option 18-30" for="AgeRange18-30" className="radio-button-container">
                    <input 
                        type="radio"  
                        name="AgeRange18-30" 
                        id="AgeRange18-30" 
                        value="18-30" 
                        onChange={event => setAge(event.target.value)} 
                        checked={age === "18-30"} 
                    />
                18-30
                    <span role="radio" className="custom-radio"></span>
                </label>               

                <label for="AgeRange30-40" className="radio-button-container" aria-label="Option 30-40">
                        <input 
                            id="AgeRange30-40"
                            name="AgeRange30-40"
                            type="radio"
                            value="30-40"
                            onChange={event => setAge(event.target.value)}
                            checked={age === "30-40"}
                        />
                30-40 
                    <span className="custom-radio"></span>                 
                </label>
                <label for="AgeRange40-50" className="radio-button-container" aria-label="Option 40-50">
                    <input
                            id="AgeRange40-50"
                            name="AgeRange40-50" 
                            type="radio"
                            value="40-50"
                            onChange={event => setAge(event.target.value)}
                            checked={age === "40-50"}
                        />
                40-50
                    <span className="custom-radio"></span>                  
                </label>

                <label for="AgeRange50+" className="radio-button-container"  aria-label="Option 50+">                    
                        <input
                            id="AgeRange50+"
                            name="AgeRange50+"
                            type="radio"
                            value="50+"
                            onChange={event => setAge(event.target.value)}
                            checked={age === "50+"}
                        />
                50+
                    <span className="custom-radio"></span>                 
                </label>
            </div>
        </fieldset>
        
    );
};