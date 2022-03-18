import React from 'react'

const SecondQuestion = ({ typeInput, onTypeInputChange, onStepChange }) => {

    return (
        <section>
        <form>
        <label>
        <p> What type of bike are you after?</p>
        </label>

       <input
       value={typeInput}
       onChange={onTypeInputChange}
       className="biketype"
       />
        
        <option value="Road racer"> I like the the speed and freedom on the roads </option> 
        <option value="Gravel bike"> I like to be in the woods, but I also like the speed, and to get to places where a car cant reach </option> 
        <option value="MTB"> I love the flow trails, cliffs and to play around in the woods. Speed is not needed.  </option> 
        
    
        </form>      
    </section>
    )
    }

    //  <button 
    // className='submit-button'
    // onClick={onStepChange}
    // >Next question
    // </button>


export default SecondQuestion



