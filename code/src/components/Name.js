/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React, { useRef, useEffect } from 'react';

const Name = (props) => {
const { name, setName, counter, setCounter, percentboop, setPercentbop } = props

const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus();
}, []);

const handleNameChange = (event) => {
    setName(event.target.value)
}

const goToNextQuestion = () => {
    setCounter(counter + 1);
    setPercentbop(percentboop + 20)
  };

const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      goToNextQuestion();
    }
};

return (
<div>
    <p>What is your name?</p>
    <input
    type="text"
    name="name"
    value={name}
    ref={inputRef}
    onKeyDown={handleKeyDown}
    onChange={handleNameChange}
    required="required" />
</div>
)
}

export default Name;