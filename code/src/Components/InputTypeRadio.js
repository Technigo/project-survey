import React from 'react';

export const InputTypeRadio = ({className, header, array, selected, setSelected}) => {
    return(
        <div className="favourite-color-container">
        <h3 tabIndex="0">{header}</h3>        
        <div className={className} aria-label="radiobutton group" tabIndex="0">            
            {array.map((option) => (
            <label key={option}>
                <input 
                type="radio"
                value={option}
                onChange={(event) => setSelected(event.target.value)}
                checked={selected === option}
                />
                {option}
            </label>
            ))}
        </div>
      </div>
    );
};