import React from 'react';

import { Button } from './Button';

export const Radio = props => {
    const travel = ["Holiday", "Business"];
    return (
        <>  
            <h2 className="question-title">What was the purpose of your visit?</h2>
            <div className="radio-buttons">
                {travel.map(item => 
                    <div key={item} className="radio-box">
                        <label htmlFor="holiday" className="radio-button-label">
                        <input 
                        type="radio"
                        id={item}
                        value={item}
                        name={props.name}
                        onChange={props.onChange}
                        checked={props.checked}
                        className="radio-button"/>
                        <span className="radio-text">{item} {item === "Business" ? <i className="fas fa-laptop"></i> : <i className="fas fa-cocktail"></i>}</span>
                        </label>
                    </div>
                )}
            </div>
            <Button 
                button="CONTINUE" />
        </>
    )
}