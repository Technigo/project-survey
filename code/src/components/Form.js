import React, { useState } from 'react'

import Intro from 'components/Intro'
import NameInputText from 'components/NameInputText'
import CountryInputRadioButton from 'components/CountryInputRadioButton'
import CompanionDropDown from 'components/CompanionDropDown'
import ActivityInputRadioButton from './ActivityInputRadioButton'
import Summary from 'components/Summary'

const Form = () => {

//STATES


const [name, setName] = useState('')
const [country, setCountry] = useState('')
const [companion, setCompanion] = useState('')
const [activity, setActivity] = useState('')
const [summary, setSummary]= useState(false) 


//ARRAYS

const countries = ['France', 'Thailand', 'Iceland', 'Australia', 'Peru']
const activities = [' make a gastronomy tour', ' explore the cultural scene', ' hangout with the locals',' party till sunrise']
   

  //FUNCTIONS 

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

  // FORM & QUESTIONS

  return (
    <>
      <main className='main-container'>
        <div className='section-container'>

      {!summary && ( 

        <form onSubmit={handleSubmit}>

          <section className='intro'>
            <Intro />
          </section>
          <section className='name-section'> 
            <NameInputText
              question={'1. What is your name?'}
              nameValue={name} 
              onNameChangeFunction={onNameChange}
            />
          </section> 
        
          <section className='country-section'>
            <h1>2. Choose a country for your next adventure:</h1>
            {countries.map((country) => 
              <CountryInputRadioButton
                key={country} 
                countryValue={country}
                onCountryChangeFunction={onCountryChange}
              />
            )}
          </section>

          <section className='companion-section'>
            <CompanionDropDown
            question={'3. Who are you taking with you on this trip?'}
            dropDownvalue = {companion}
            onCompanionChangeFunction = {onCompanionChange}
            />
          </section>
                
          <section className="activity-section">
            <h1>4. What's the main activity you are looking forward to?</h1>
            {activities.map((activity) =>
              <ActivityInputRadioButton
                key={activity} 
                activityValue={activity}
                onActivityChangeFunction = {onActivityChange} 
              />
            )}
            <div className="button-section"> 
              <button 
                onSubmit= {handleSubmit}
                type="submit"
                className='circleScaleBtn'

              ><span>Submit</span></button>
            </div>  
          </section>
        </form> 

      )} 
      
      {( 
        <>
          {summary && 
            <section className="summary-section">
              <Summary
                nameValue={name}
                countryValue={country}
                companionValue={companion}
                activityValue={activity}
              />
              <img src="/assets/packing.png" alt="suitcase being packed"/>
            </section>
          }
        </>
      )}
      </div>
    </main> 

    </> 
  
  )
}

export default Form
