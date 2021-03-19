import React, { useState } from 'react'
import Summary from 'components/Summary'
/* import Button from 'components/Button' */

  const Form = () => {
    
    /* FUNCTIONS */

    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [companion, setCompanion] = useState('')
    const [activity, setActivity] = useState('')
    const [summary, setSummary]= useState(false) 
    
    const handleSubmit = event => {
        event.preventDefault();
        setSummary(true) 
    }
    
    const onNameChange = (e) => {
      console.log(e.target.value);
      setName(e.target.value);
    }

    const onCountryChange = (e) => {
      console.log(e.target.value);
      setCountry(e.target.value);
    }
    
    const onCompanionChange = (e) => {
      console.log(e.target.value);
      setCompanion(e.target.value);
    }
    const onActivityChange = (e) => {
      console.log(e.target.value);
      setActivity(e.target.value);
    }
 
    

    /*QUESTIONS*/

    return (
      <>
        
        {!summary && ( 

        <form onSubmit={handleSubmit}>
          
          <>
            <p>We are so pleased to announce that you are the winner of a trip!</p>
            <p>But first we need to gather some basic information so we can start organizing your next holidays!</p> 
             
            <div className="question one">
              <label htmlFor="name">1. What's your name?</label> 
              <input
                id="name"
                type="text"
                value={name} 
                onChange={onNameChange}
                className="form-input"
                placeholder="Type your name here"
                required
                />
              </div>
          </>

          <>
            <p>2. Which country you want to travel to and spend 10 wonderful days?</p>
            <label htmlFor="france">France</label>
            <input 
              name="country"
              id="france" 
              value="france"
              type="radio"
              onChange={onCountryChange} 
            />
            <label htmlFor="iceland">Iceland</label>
            <input 
              name="country"
              id="iceland" 
              value="iceland"
              type="radio"
              onChange={onCountryChange} 
            />
            <label htmlFor="peru">Perú</label>
            <input 
              name="country"
              id="peru" 
              value="peru"
              type="radio"
              onChange={onCountryChange} 
            />
            <label htmlFor="thailand">Thailand</label>
            <input 
              name="country"
              id="thailand" 
              value="thailand"
              type="radio"
              onChange={onCountryChange} 
            />
            <label htmlFor="australia">Australia</label>
            <input 
              name="country"
              id="australia" 
              value="australia"
              type="radio"
              onChange={onCountryChange} 
            />
          </>

          <>
            <label htmlFor="companion">
            4. Who are you taking with you on this trip?
            </label>
            <select id="companion" onChange={onCompanionChange} value={companion} >
              <option disabled></option>
              <option>partner</option>
              <option>best friend</option>
              <option>mom</option>
              <option>child</option>
              <option>dog</option>
            </select>   
          </>

          <>
            <p>5. What's the main activity you are looking forward to?</p>
            <label htmlFor="nature">Enjoy nature!</label>
            <input 
              name="activity"
              id="nature" 
              value="nature"
              type="radio"
              onChange={onActivityChange} 
            />
            <label htmlFor="gastronomy">Make a gastronomic tour</label>
            <input 
              name="activity"
              id="gastronomy" 
              value="gastronomy" 
              type="radio"
              onChange={onActivityChange} 
            />
            <label htmlFor="culture">Explore the cultural scene</label>
            <input 
              name="activity"
              id="culture" 
              value="culture" 
              type="radio"
              onChange={onActivityChange} 
            />
            <label htmlFor="locals">I want to hang out with the locals!</label>
            <input 
              name="activity"
              id="locals" 
              value="locals" 
              type="radio"
              onChange={onActivityChange} 
            />
            <label htmlFor="party">Party hard till sunrise!</label>
            <input 
              name="activity"
              id="party" 
              value="party" 
              type="radio"
              onChange={onActivityChange} 
            /> 
          </>

            <button 
              onSubmit= {handleSubmit}
              type="submit"
            >Submit</button>
           
        </form> 
 
        )} 
        
        {( 
          <>
          {summary && 
            <Summary
             name={name}
             country={country}
             companion={companion}
             activity={activity}
             
            />
          }
          </>
        )}
      </> 

    )
}

export default Form 
