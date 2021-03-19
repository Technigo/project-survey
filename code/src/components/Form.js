import React, { useState} from 'react'



const Form = () => {
  const [name, setName] = useState(''); //current state, set state
  const [dropdown, setDropdown] = useState(''); 
  const [radio, setRadio] = useState('');
  const [secondRadio, setSecondRadio] = useState('');
  
//array of radio buttons to map the data via props
const bookDate = [
  'April 1st',
  'May 2nd',
  'July 13th',
  'August 3rd'
]
const seatSection = [
  'Stand Sec A',
  'Stand Sec B',
  'Sit Sec A',
  'Sit Sec B'
]


  const handleSubmit = (event) => {
    event.preventDefault()
   
    alert(
      `Confirmation of your purchase, 
       Your name: ${name},
       Artist: ${dropdown},
       ${setRadio.date},
       ${setSecondRadio}
      `
    )
  }
  
  const onNameChange = (event) => {
    console.log(`Name: ${event.target.value}`)
    setName (event.target.value) 
  }
  const onDropdownChange = (event) => {
    setDropdown(event.target.value) 
  }
  // const onRadioChange = (event) => {
  //   setRadio(event.target.value) 
  // }
  // const onRadioSecondChange = (event) => {
  //   setSecondRadio(event.target.value) 
  // }
 
  // const slider = document.getElementById("slider-choice");
  // const output = document.getElementById("demo");
  // output.innerHTML = slider.value;

  // slider.oninput = function() {
  // output.innerHTML = {value};
  // }
  
  return (
    <form 
      className="form-container" 
      onSubmit={handleSubmit}
    >
      <h2 className="header-name">
        Thank you for chosing us for your next rock concert.
      </h2>
      <h2 className="header-name"> 
        Please answer below question to purchase your tickets. 
      </h2>
      <div className="container-input-fields">
        <div className="name-label">
          <label htmlFor="name">Full name:</label>
          <input 
            className="name-input" 
            id="name" 
            type="text" 
            value={name} 
            onChange={onNameChange}
          /> 
        </div>

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

      <div className="first-radio">
        <h2 className="question-radio">When do you want to go?</h2>
        {bookDate.map((date) => (
          <label key={date} htmlFor="date">
          <input 
            name="date" 
            type="radio" 
            value={date} 
            onChange={(event) => setRadio(event.target.value)}
            checked={radio === date}>
          </input>
          {date}
          </label>
))}
        
      </div>
      <div className="question-radio">
        <h2 className="question-radio">What section?</h2>
        <div className="radio-wrapper">
         {seatSection.map((seat) => (
           <label key={seat} htmlFor="seat">
           <input 
             id="seat"
             name="seats" 
             type="radio" 
             value={seat} 
             onChange={(event) => setSecondRadio(event.target.value)}
             checked={secondRadio === seat}>
           </input>
           {seat}
           </label>
         
         ))}
        
        </div>
      </div>
      {/* <div className= "slider-choice">
        <h2>How many tickets are you buying today?</h2>
        <input type="range" min="1" max="100" value="0" className="slider" id="slider-range">
      </div> */}
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

  // if (showSummary === true) {
  //   console.log('showSummary')
  // }
  
  // else {
   

// const isSurveyComplete = () => {
//   if (name === ""){
//       return false; 
//     }
// if (dropdown === ""){
//   return false; 
// }
// if (radio === "") {
//   return false; 
// }
// if (secondRadio === ""){
//   return false; 
// }
// return true; 
// };

// if (isSurveyComplete()) {
//   console.log(`Survey Complete!`);
//   alert("Form submitted!")
// }

