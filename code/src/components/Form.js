import React, { useState} from 'react'

const Form = () => {
  const [name, setName] = useState('') //current state, set state
  const [dropdown, setDropdown] = useState('') 
  const [radio, setRadio] = useState('')
  const [secondRadio, setSecondRadio] = useState('')
 

//array of radio buttons to map the data 
const bookDate = [
  'April 1st',
  'May 2nd',
  'July 13th',
  'Aug 3rd',
  'Sep 18th'
]
const seatSection = [
  'Standing',
  'Section A',
  'Section B',
  'Section C',
  'Section D'
]
  

  const handleSubmit = (event) => {
    event.preventDefault() 
    
    alert (
      `Confirmation of your purchase:

       Your name: ${name}
       Artist: ${dropdown}
       Date: ${radio}
       Section: ${secondRadio}
      `
    )
  }
  
  const onNameChange = (event) => {
    setName (event.target.value) 
  }
  const onDropdownChange = (event) => {
    setDropdown(event.target.value) 
  }
  const onRadioChange = (event) => {
    setRadio(event.target.value) 
  }
  const onRadioSecondChange = (event) => {
    setSecondRadio(event.target.value) 
  }
 
  const isSurveyComplete = () => {
    if(name !== '' && dropdown !== '' && radio !== '' && secondRadio !== '' ){
        return true;
    }
    return false;
  }
  if (isSurveyComplete()) {
    alert(
      `Confirmation of your purchase:

       Your name: ${name}
       Artist: ${dropdown}
       Date: ${radio}
       Section: ${secondRadio}
      `
    )
  }

  return (
    <form 
      className="form-container" 
      onSubmit={handleSubmit}
    >
      <h1 tabIndex="0" className="header-name">
        Your next rock concert starts now!
      </h1>
{/* name input field */}
      <div className="container-input-fields">
        <div className="name-label">
          <label htmlFor={name}>Full name:</label>
          <input 
            className="name-input" 
            id="name" 
            type="text" 
            value={name} 
            onChange={onNameChange}
          /> 
        </div>
{/* Question about artist */}
        <div className="dropdown-menu" >
          <label htmlFor="dropdown">Which concert are you attending?</label>
          <select value={dropdown}onChange={onDropdownChange}>
            <option disabled></option>
            <option >Bruce Springsteen</option>
            <option >Bob Dylan</option>
            <option >The Doors</option>
          </select>
        </div>
      </div>
{/* Question about date */}
      <div className="first-radio">
        <h3 tabIndex="0" className="question-radio">Date: </h3>
        {bookDate.map((date) => (
          <label key={date} htmlFor={date}>
          <input 
            id={date}
            name="date" 
            type="radio" 
            value={date} 
            required
            onChange={onRadioChange}
            checked={radio === date}>
          </input>
          {date}   {/*why is this needed?? */}
          </label>
        ))}      
      </div>
{/* Question about Seat  */}
      <div className="question-radio">
        <h3 tabIndex="0" className="question-radio">Seat section:</h3>
        <div className="radio-wrapper">
         {seatSection.map((seat) => (
           <label key={seat} htmlFor={seat}>
           <input 
             id={seat}
             name="seat" 
             type="radio" 
             value={seat} 
             required
             onChange={onRadioSecondChange}
             checked={secondRadio === seat}>
           </input>
           {seat} 
           </label>
          ))}
        </div>
      </div>
{/* submit form */}
      <button 
        className="submit-button" 
        onSubmit={handleSubmit}
        type="submit">
        BUY TICKETS
      </button>

    </form>
  )  
 }

export default Form; 

   

