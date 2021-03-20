import React, { useState } from 'react';

import TextField from './TextField';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import Radiobuttons1 from './Radiobuttons1';
import Radiobuttons2 from './Radiobuttons2';
import Radiobuttons3 from './Radiobuttons3';
import RangeSlider from './RangeSlider';
import Summary from './Summary';

import './Form.css'

const Form = () => {

  const [inputName, setInputName] = useState('');
  const [genre, setGenre] = useState('');
  const [cost, setCost] = useState('');
  const [selectBigVenue, setSelectBigVenue] = useState();
  const [selectMidVenue, setSelectMidVenue] = useState();
  const [selectSmallVenue, setSelectSmallVenue] = useState();
  const [range, setRange] = useState(); //WHAT GOES HERE?
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowSummary(true);
  };

  return (
    <>
    {! showSummary ? (
       <section className="main-wrapper">
       <TextField inputName = {inputName} setInputName = {setInputName} />
       <Dropdown1 genre = {genre} setGenre = {setGenre} />
       <Dropdown2 cost = {cost} setCost = {setCost} />
       <Radiobuttons1 selectBigVenue = {selectBigVenue} setSelectBigVenue = {setSelectBigVenue} />
       <Radiobuttons2 selectMidVenue = {selectMidVenue} setSelectMidVenue = {setSelectMidVenue} />
       <Radiobuttons3 selectSmallVenue = {selectSmallVenue} setSelectSmallVenue = {setSelectSmallVenue} />
       <RangeSlider range = {range} setRange = {setRange} /> 
       <section className="submit-section">
        <button className="submit-button" type="submit" onClick={ handleSubmit }>
          <h4>SEND US YOUR ANSWERS 
          </h4>
          </button>
       </section>
   
       </section>

    ): (<Summary 
      inputName = {inputName} 
      genre = {genre} 
      cost = {cost} 
      selectBigVenue = {selectBigVenue} 
      selectMidVenue = {selectMidVenue} 
      selectSmallVenue = {selectSmallVenue} 
      range = {range} />
     
    )}
    </>
  )
}

export default Form;