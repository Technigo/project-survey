import React from 'react'

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {

return (
        <section>
       <form>
        <label htmlFor= "nameInput"> What´s your name?
        </label> 

        <input 
        id="name" 
        type="text" 
        value={''}
        onChange={onNameInputChange}
        />
        
        <button 
        className='submit-button'
        onClick={onStepChange}
        disabled={nameInput === ""}
        >Continue on!
        </button>
   </form>
   </section>


);
};

export default FirstQuestion