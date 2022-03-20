import React from 'react'

const SecondQuestion = ({ typeInput, onTypeInputChange, onStepChange }) => {

    return (
        <section>
            
        <form>

         <div className='dropdown'>   
         <label>
         <div className='dropdown-question'>    

        <h2> What type of bike are you looking for?</h2>
        </div>
         <select value={typeInput} onChange={onTypeInputChange} className= "dropdown-menu">
           <option value="" disabled>Select a bike!</option>  
           <option value="Road racer"> Road racer</option> 
           <option value="Gravel bike"> Gravel bike </option> 
           <option value="MTB"> Mountain bike </option> 
        
    </select>
         
        </label> 

        <button 
        className='submit-button'
        onClick={onStepChange}
        disabled={typeInput === ""}
        >NEXT!
        </button>
        
        
        </div>
        </form>
        </section>      
     )
    }

   


export default SecondQuestion



