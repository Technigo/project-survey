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
          /> 
        </label> 
      </div>

    
      <div className="DropdownQuestion colorTwo dropdown">
        <select onChange = {
        event => setCuisine(event.target.value)
      } 
        value = { cuisine }
        required >
     
          <option value = "" >  2. Favourite cuisine: </option> 
          <option value = "Italian" > Italian </option> 
          <option value = "Thai" > Thai </option> 
          <option value = "Swedish" > Swedish </option> 
          <option value = "Spanish Tapas" > Spanish Tapas </option> 
          <option value = "Lebanese" > Lebanese </option> 
          <option value = "Mexican" > Mexican </option> 
          <option value = "Non of the above" > Non of the above </option> 
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