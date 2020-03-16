import React, {useState} from "react"
import {Button} from './Button'
import { Summary } from './Summary'

const visitsAmount = ["0-2", "3-5", "6-8", "9 +"];

export const Form = () => {
  const [showSummary, setShowSummary] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true)
  }
 
  const [city, setCity] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [cuisine, setCuisine] = useState("");
  const [visits, setVisits] = useState("");
  return ( 
  <section>
  {!showSummary ? (
    <form onSubmit={handleSubmit}>
      <div className="TextQuestion colorOne">
        <label>
          1. Your city 
         
          <input type = "text"
          onChange = {event => setCity(event.target.value)}
          value = {city}
          required
          tabIndex = "0"
          /> 
        </label> 
      </div>

    
      <div className="DropdownQuestion colorTwo dropdown">
        <select onChange = {
        event => setCuisine(event.target.value)
      } 
        value = { cuisine }
        required 
        tabIndex = "0">
     
          <option value = "" tabIndex = "0" >  2. Favourite cuisine: </option> 
          <option value = "Italian" tabIndex = "0"> Italian </option> 
          <option value = "Thai" tabIndex = "0"> Thai </option> 
          <option value = "Swedish" tabIndex = "0"> Swedish </option> 
          <option value = "Spanish Tapas" tabIndex = "0"> Spanish Tapas </option> 
          <option value = "Lebanese" tabIndex = "0"> Lebanese </option> 
          <option value = "Mexican" tabIndex = "0"> Mexican </option> 
          <option value = "Non of the above" tabIndex = "0"> Non of the above </option> 
        </select>
      </div>
      <div className="RadioQuestion colorThree">
      3. Visits / Month :
      {visitsAmount.map(amount => (
        <label key={amount}>
          <input
          type="radio"
          name="restaurantvisits"
          value={amount}
          onChange={event => setVisits(event.target.value)}
          checked={visits === amount}
          required
          tabIndex = "0"
          />
          {amount}
        </label>
) )}
      </div>
      <div className="CheckboxQuestion colorFour">
        <label>
          <input type = "checkbox"
          checked = {agreement}
          onChange = {event => setAgreement(event.target.checked)}
          required
          tabIndex = "0"
          /> 
          
       4. I agree to the terms & conditions
        </label> 
      </div>
    <Button />
    </form> ) : (
    <Summary 
    city = {city} 
    cuisine = {cuisine}
    visits = {visits}
    /> )}
  </section>
  )
}