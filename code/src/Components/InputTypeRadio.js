import React from 'react';

export const InputTypeRadio = ({className, header, array, selected, setSelected}) => {
    return(
        <div className="favourite-color-container">
        <h3>{header}</h3>        
        <div className={className}>
            
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