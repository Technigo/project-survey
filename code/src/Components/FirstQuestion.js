import React from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
       
    return (
        <form>
            <label htmlFor="nameInput">Skriv ditt namn</label>
                <input 
                    id="nameInput" 
                    type="text" 
                    value={nameInput} 
                    onChange={onNameInputChange}
                />
             <button 
                disabled= {nameInput === ''}
                onClick= {onStepChange}
                >
                Nästa fråga
                </button>
        </form>
    );
};

export default FirstQuestion;