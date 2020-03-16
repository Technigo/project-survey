import React, {useState} from "react"
import {Button} from './Button'
import { Summary } from './Summary'


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
    <form onSubmit={handleSubmit}>
      <div className="TextQuestion White">
    <label>
    Your city 
    <br></br>
    <input type = "text"
    onChange = {
      event => setCity(event.target.value)
    }
    value = {
      city
    }
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
    Restaurant visits / month
    
    <label>
    <input type = "radio"
    value = "0-2"
    onChange = {
      event => setVisits(event.target.value)
    }
    checked = {
      visits === "0-2"
    }
    />
    0-2 
    </label>

    <label>
    <input type = "radio"
    value = "3-5"
    onChange = {
      event => setVisits(event.target.value)
    }
    checked = {
      visits === "3-5"
    }
    />
    3-5 
    </label>

    <label >
    <input type = "radio"
    value = "6-8"
    onChange = {
      event => setVisits(event.target.value)
    }
    checked = {
      visits === "6-8"
    }
    />
    6-8
    </label> 
    <label >
    <input type = "radio"
    value = "9+"
    onChange = {
      event => setVisits(event.target.value)
    }
    checked = {
      visits === "9+"
    }
    />
    9 +
    </label> 
    </div>
    <div className="CheckboxQuestion Grey">
    <label>
    
    <br></br>
    <input type = "checkbox"
    checked = {
      agreement
    }
    onChange = {
      event => setAgreement(event.target.checked)
    }
    /> 
    I agree to the terms & conditions
    </label> 
    </div>
    <Button />
    <Summary 
    city = {city} 
    cuisine = {cuisine}
    visits = {visits}
    /> 
    </form>
  )
}