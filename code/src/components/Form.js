import React, { useState } from 'react';

import TextField from './TextField';
// import Checkbox from './Checkbox';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import Radiobuttons1 from './Radiobuttons1';
import Radiobuttons2 from './Radiobuttons2';
import Radiobuttons3 from './Radiobuttons3';
import RangeSlider from './RangeSlider';
import SubmitButton from './SubmitButton';

const Form = () => {

  // const [inputName, setInputName] = useState('');
  // const [genre, setGenre] = useState('');
  // const [cost, setCost] = useState('');
  // const [selectBigVenue, setSelectBigVenue] = useState();
  // const [selectMidVenue, setSelectMidVenue] = useState();
  // const [selectSmallVenue, setSelectSmallVenue] = useState();
  // const [val, setVal] = useState([1]); //WHAT GOES HERE?

  // const on

  // const isSurveyComplete = () => {
 
  //   if (inputName === '') {
  //     return false;
  //   }

  //   if (genre === '') {
  //     return false;
  //   }

  //   if (cost === '') {
  //     return false;
  //   }

  //   if (selectBigVenue === '') {
  //     return false;
  //   }

  //   if (selectMidVenue === '') {
  //     return false;
  //   }

  //   if (selectSmallVenue === '') {
  //     return false;
  //   }

  //   if (val === '') {
  //     return false;
  //   }

  //   return true;
  // };

  // if (isSurveyComplete()) {
  //   console.log(`Survey Complete!`);
  // }

  return (
    <>
    <TextField />
    <Dropdown1 />
    <Dropdown2 />
    <Radiobuttons1 />
    <Radiobuttons2 />
    <Radiobuttons3 />
    <RangeSlider />
    <SubmitButton />
    </>
  )
}

export default Form;