import React, { useState} from 'react'


const Form = () => {
  const [name, setName] = useState(''); //current state, set state
  const [dropdown, setDropdown] = useState(''); 
  const [radio, setRadio] = useState('');
  const [secondRadio, setSecondRadio] = useState('');
 
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
        <label forHtml="name">Name</label>
        <input id="name" type="text" value={name} onChange={onNameChange}/> 
      </div>
      <div>
        <label htmlFor="dropdown">A label here</label>
        <select value={dropdown}onChange={onDropdownChange}>
          <option value="often">Often</option>
          <option value="rarely">Rarely</option>
          <option value="always">Always</option>
          <option value="never">Never</option>
        </select>
      </div>
      <div>
        <label htmlFor="radio">A label here too</label>
        <input name="radio" type="radio" value={radio} onChange={onRadioChange}></input>
        <label htmlFor="radio">A label here too</label>
        <input name="radio" type="radio" value={radio} onChange={onRadioChange}></input>
        <label htmlFor="radio">A label here too</label>
        <input name="radio" type="radio" value={radio} onChange={onRadioChange}></input>
        <label htmlFor="radio">A label here too</label>
        <input name="radio" type="radio" value={radio} onChange={onRadioChange}></input>
      </div>
      <div>
        <label htmlFor="secondRadio">A label here too</label>
        <input name="secondRadio" type="radio" value={secondRadio} onChange={onRadioSecondChange}></input>
        <label htmlFor="secondRadio">A label here too</label>
        <input name="secondRadio" type="radio" value={secondRadio} onChange={onRadioSecondChange}></input>
        <label htmlFor="secondRadio">A label here too</label>
        <input name="secondRadio" type="radio" value={secondRadio} onChange={onRadioSecondChange}></input>
        <label htmlFor="secondRadio">A label here too</label>
        <input name="secondRadio" type="radio" value={secondRadio} onChange={onRadioSecondChange}></input>
      </div>
    </form>
  )

}
export default Form; 