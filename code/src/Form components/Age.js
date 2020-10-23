import React from 'react'

export const Age = ({age, setAge}) => {

    return (
        <div className="input-container">
            <h3>What's your age range?</h3>
            <div className="radio-button-row">
                <label className="radio-button-container">
                    <input 
                        type="radio"
                        value="18-30"
                        onChange={event => setAge(event.target.value)}
                        checked={age === "18-30"}
                    />
                    18-30 
                    <span className="custom-radio"></span>                  
                </label>
                <label className="radio-button-container">
                    <input 
                        type="radio"
                        value="30-40"
                        onChange={event => setAge(event.target.value)}
                        checked={age === "30-40"}
                    />
                    30-40
                    <span className="custom-radio"></span>                  
                </label>
                <label className="radio-button-container">
                    <input 
                        type="radio"
                        value="40-50"
                        onChange={event => setAge(event.target.value)}
                        checked={age === "40-50"}
                    />
                    40-50
                    <span className="custom-radio"></span>                  
                </label>

                <label className="radio-button-container">
                    <input 
                        type="radio"
                        value="50+"
                        onChange={event => setAge(event.target.value)}
                        checked={age === "50+"}
                    />
                    50+
                    <span className="custom-radio"></span>                  
                </label>
            </div>
        </div> 
    );
};