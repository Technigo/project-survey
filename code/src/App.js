import React, { useState } from 'react'
import './index.css'
import { Header } from "./Components/Header"
import { Summary } from "./Components/Summary";
import { NameQuestion } from 'Components/NameQuestion';
import { PhoneQuestion } from 'Components/PhoneQuestion';
import { LocationQuestion } from 'Components/LocationQuestion';
import { AgeQuestion } from 'Components/AgeQuestion';
import { FavorQuestion } from 'Components/FavorQuestion';


export const App = () => {
  const [name, setName] =useState ('')
  const [phoneNumber, setPhoneNumber] = useState ('')
  const [location, setLocation] =useState ('')
  const [ageGroup, setAgeGroup] =useState ()
  const [provideGroceries, setProvideGroceries] =useState (false)
  const [provideMedication, setProvideMedication] =useState (false)
  const [provideMealDeliveryServices,setProvideMealDeliveryServices] =useState (false)
  const [showSummary, setShowSummary] =useState(false) 

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true)
  };

  return (
  <div className='header-container'> 
  <Header/>
  <div className='big-card'>
    <div className='picture'></div>  
    <div className='aplication-form'>
      {!showSummary ? (
      <form onSubmit ={handleSubmit}>
          <NameQuestion name={name} setName={setName} />
          <PhoneQuestion phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/> 
          <LocationQuestion location={location} setLocation={setLocation} />
          <AgeQuestion ageGroup={ageGroup} setAgeGroup={setAgeGroup}/>
          <FavorQuestion  
            provideGroceries={provideGroceries} setProvideGroceries={setProvideGroceries}
            provideMedication={provideMedication} setProvideMedication={setProvideMedication}
            provideMealDeliveryServices={provideMealDeliveryServices} setProvideMealDeliveryServices={setProvideMealDeliveryServices} 
          />     
          <button className='submit-button' type="submit">Submit</button>
      </form>
        ) : (
      <Summary 
        name={name}
        phoneNumber={phoneNumber}
        location={location}
        ageGroup={ageGroup} 
        />
        )}
    </div> 
</div>
</div>
  )
}
