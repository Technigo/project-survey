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
      <div className="TextQuestion White">
        <label>
          Your city 
         
          <input type = "text"
          onChange = {event => setCity(event.target.value)}
          value = {city}
          required
          /> 
        </label> 
      </div>

    
      <div className="DropdownQuestion Grey dropdown">
        <select onChange = {
        event => setCuisine(event.target.value)
      } 
        value = { cuisine } >
      
          <option value = "" > Favourite cuisine: </option> 
          <option value = "italian" > Italian </option> 
          <option value = "thai" > Thai </option> 
          <option value = "swedish" > Swedish </option> 
          <option value = "tapas" > Spanish Tapas </option> 
          <option value = "meze" > Lebanese </option> 
          <option value = "Mexican" > Mexican </option> 
          <option value = "other" > Non of the above </option> 
        </select>
      </div>
      <div className="RadioQuestion White">
      Visits / Month :
      {visitsAmount.map(amount => (
        <label key={amount}>
          <input
          type="radio"
          value={amount}
          onChange={event => setVisits(event.target.value)}
          checked={visits === amount}
          required
          />
          {amount}
        </label>
) )}
      </div>
      <div className="CheckboxQuestion Grey">
        <label>
          <input type = "checkbox"
          checked = {agreement}
          onChange = {event => setAgreement(event.target.checked)}
          required
          /> 
        I agree to the terms & conditions
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