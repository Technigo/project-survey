import React, { useState } from 'react';

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
    const onFormSubmit = (event) => {event.preventDefault()}
    // const [error, setError] = useState('')
       
    return (
     <section>
         <h1>Påskmiddagsformulär</h1>
    
        <form onSubmit={onFormSubmit}>
            <label htmlFor="nameInput">Skriv ditt namn</label>
                <input 
                    id="nameInput" 
                    type="text" 
                    value={nameInput} 
                    onChange={onNameInputChange}
                />
                {/* {!!error.length && <div>{error}</div>} */}
        
             <button
                //type=
                //disabled= {nameInput === ''}
                onClick= {onStepChange}
                >
                Nästa fråga
                </button>
        </form>
     </section> 
    );
};

export default FirstQuestion;