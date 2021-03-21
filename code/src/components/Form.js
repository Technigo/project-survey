import React, { useState} from 'react'

const Form = () => {
  const [name, setName] = useState('') //current state, set state
  const [dropdown, setDropdown] = useState('') 
  const [radio, setRadio] = useState('')
  const [secondRadio, setSecondRadio] = useState('')
  const [surveyComplete, setSurveyComplete] = useState(false)
 
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

  const isSurveyComplete = () => {
    if(name !== '' && dropdown !== '' && radio !== '' && secondRadio !== '' ){
        return true;
     }
    return false; 
  }

  const handleSubmit = (event) => {
    event.preventDefault() 
    
    if (isSurveyComplete()) {
      setSurveyComplete(true)
    } else {
      alert("Please fill out all the fields")
    }
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

// conditional rendering - if complete true do this:
  if (surveyComplete) {
    return (
      <div className="summary">
        <h3>Summary:</h3>
        <p>Tickets: {name}</p>
        <p>Artist: {dropdown}</p>
        <p> Date: {radio}</p>
        <p>Section: {secondRadio}</p>
        <p>Shortly you will be taken to the payment section.. </p>
      </div>
    )
   
  } else {

  return (
    <>
    <header className="header">
      <h1 tabIndex="0" className="header-name">
        Your next rock concert starts now!
      </h1>
    </header>
    <form 
      className="form-container" 
      onSubmit={handleSubmit} //How does it know its submitted, is it working with the button? How?
    >
      
{/* name input field */}
      <div className="container-input-fields">
        <div className="name-label">
          <label htmlFor={name}>Number of tickets:</label>
          <input 
            className="name-input" 
            id="name" 
            type="number" 
            value={name} 
            onChange={onNameChange}
          /> 
        </div>
{/* Question about artist */}
        <div>
          <label htmlFor="dropdown">Which concert are you attending?</label>
          <select value={dropdown}onChange={onDropdownChange}>
            <option disabled></option>
            <option >Bruce Springsteen</option>
            <option >Bob Dylan</option>
            <option >The Doors</option>
            <option >Metallica</option>
            <option >The Strokes</option>
          </select>
        </div>
      </div>
{/* Question about date */}
      <h3 tabIndex="0" className="question-radio">Date: </h3>
      <div className="first-radio">
        {bookDate.map((date) => (
          <label key={date} htmlFor={date} className="label-container">
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
      <h3 tabIndex="0" className="question-radio">Seat section:</h3>
      <div className="question-radio">
        
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
        // onSubmit={handleSubmit} // why does it not work to use the handleSubmit here? 
      >
        BUY TICKETS
      </button>

    </form>
    </>
  )  
}
}
export default Form; 

   

