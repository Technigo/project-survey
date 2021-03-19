import React, { useState} from 'react'
// import { SubmitForm } from './components/SubmitForm'


const Form = () => {
  const [name, setName] = useState(''); //current state, set state
  const [dropdown, setDropdown] = useState(''); 
  const [radio, setRadio] = useState('');
  const [secondRadio, setSecondRadio] = useState('');
  const [showSummary, setShowSummary] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowSummary(true)
  }
  const onNameChange = (event) => {
    console.log(`Name: ${event.target.value}`)
    setName (event.target.value) //what happened, where did it happen, what was the input?
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
 
  
  return (
   
    <form className="form-container">
      <div className="name-label">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={onNameChange}/> 
      </div>
      <div>
        <label htmlFor="dropdown">A label here</label>
        <select value={dropdown}onChange={onDropdownChange}>
          <option disabled></option>
          <option >Often</option>
          <option >Rarely</option>
          <option >Never</option>
        </select>
      </div>
      <div className="first-radio">
        <label htmlFor="radio">A label here too</label>
        <input name="radio" type="radio" value={radio} onChange={onRadioChange}></input>
        <label htmlFor="radio">A label here too</label>
        <input name="radio" type="radio" value={radio} onChange={onRadioChange}></input>
        <label htmlFor="radio">A label here too</label>
        <input name="radio" type="radio" value={radio} onChange={onRadioChange}></input>
        <label htmlFor="radio">A label here too</label>
        <input name="radio" type="radio" value={radio} onChange={onRadioChange}></input>
      </div>
      <div className="second-radio">
        <label htmlFor="secondRadio">A label here too</label>
        <input name="secondRadio" type="radio" value={secondRadio} onChange={onRadioSecondChange}></input>
        <label htmlFor="secondRadio">A label here too</label>
        <input name="secondRadio" type="radio" value={secondRadio} onChange={onRadioSecondChange}></input>
        <label htmlFor="secondRadio">A label here too</label>
        <input name="secondRadio" type="radio" value={secondRadio} onChange={onRadioSecondChange}></input>
        <label htmlFor="secondRadio">A label here too</label>
        <input name="secondRadio" type="radio" value={secondRadio} onChange={onRadioSecondChange}></input>
      </div>
      <button onSubmit={handleSubmit} type="submit">SUBMIT FORM</button>
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

