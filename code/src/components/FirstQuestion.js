import React from 'react'

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {

return (
        <section>
            
            <div className ="form-wrapper">
                <h1>HEY biker!</h1> 
            </div>
       <form>
        <label htmlFor= "nameInput"> What's your name?
         
        <input 
        id="nameInput" 
        type="text" 
        name="name"
        value={nameInput}
        onChange={onNameInputChange}
        required
        />
        </label>

        <button 
        className='submit-button'
        onClick={onStepChange}
        disabled={nameInput === ""}
        >NEXT
        </button>
   </form>
   </section>


)
}

export default FirstQuestion