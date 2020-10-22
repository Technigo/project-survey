import React, { useState } from 'react'

// CTRL:ed component: simple string answer
const Question1 = (props) => {
  //state hook
  const [text, setText] = useState("");

  //lecture stuff: whatever we pass in as argument will update the text via setText function
  //if the function starts with on, then it should be only used within the component
  //if the function is passed to other components, use "handle"NameChange 
  const onTextChange = (newText) => {
    setText(newText);
  }

  console.log(text);

  return (
    <form className="section-container">
      <label htmlFor="textField">{props.question}</label>
      <input
        type="text"
        id="textField"
        name="answerOne"
        autocomplete="off"
        //the bottom 2 parts & the type are controlled components
        //arrow functions are less efficient, better to use function name only
        onChange={(event) => onTextChange(event.target.value)}
        value={text}>
      </input>
    </form>)
}

export default Question1;