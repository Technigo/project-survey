import React, { useState } from 'react';

import Textfield from './Textfield';
import Checkbox from './Checkbox';
import Radiobuttons from './Radiobuttons';


const Form = () => {
  const [inputName, setInuptName] = useState(''); //Desctriptive names set by developer (apart from prefix "set"). Default value for the input field/button etc is set in () after useState

  const onNameChange = (event) => { //Event can also be shortened by just (e)
console.log(event.target.value); //Will type out every single character that is written in the name input field in the console
setInuptName(event.target.value);
  }
 
  return (
    <>
    <Textfield />
    <Checkbox />
    <Radiobuttons />
    <form>
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
    </form>

    </>
  )
}

export default Form;

