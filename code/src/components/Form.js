import React, { useState } from 'react';

import TextField from './TextField';
// import Checkbox from './Checkbox';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import Radiobuttons1 from './Radiobuttons1';
import Radiobuttons2 from './Radiobuttons2';
import Radiobuttons3 from './Radiobuttons3';
import RangeSlider from './RangeSlider';
import Submit from './Submit';

const Form = () => {

  return (
    <>
    <TextField />
    <Dropdown1 />
    <Dropdown2 />
    <Radiobuttons1 />
    <Radiobuttons2 />
    <Radiobuttons3 />
    <RangeSlider />
    <Submit />
    </>
  )
}

export default Form;







// const [inputName, setInuptName] = useState(''); //Desctriptive names set by developer (apart from prefix "set"). Default value for the input field/button etc is set in () after useState

// const onNameChange = (event) => { //Event can also be shortened by just (e)
// console.log(event.target.value); //Will type out every single character that is written in the name input field in the console
// setInuptName(event.target.value);
// }


/* <form>
<div>
  <label htmlFor="name">Name</label>
  <input 
  id="name" 
  type="text" 
  value={inputName}
  onChange={onNameChange}
  />
</div>
<div>
  <label htmlFor="season">Favourite season</label>
  <select id="season">
    <option>Winter</option>
    <option>Spring</option>
    <option>Summer</option>
    <option>Fall</option>
  </select>
</div>
<div>
  <p>Favourite technology</p>
  <label htmlFor="html">HTML</label>
  <input id="html" type="radio" />
  <label htmlFor="css">CSS</label>
  <input id="css" type="radio" />
  <label htmlFor="js">JavaScript</label>
  <input id="js" type="radio" />
</div>
</form> */