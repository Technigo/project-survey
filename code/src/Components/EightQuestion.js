import React from 'react';

export const EightQuestion = ({ bodyPart, setBodyPart }) => {
  const handleEightAnswer = (event) => {
    setBodyPart(event.target.value);
  }
  return (
    <form>
      <p className="instructionText"> Pick a body part! </p>
      <select aria-label="dropdown menu" className="drop-down" onChange={handleEightAnswer} value={bodyPart}>
        <option value="" disabled>Pick a body part </option>
        <option value="brain">Brain</option>
        <option value="lungs">Lungs</option>
        <option value="tongue">Tongue</option>
        <option value="eyes">Eyes</option>
        <option value="nose">Nose</option>
        <option value="teeth">Teeth</option>
        <option value="cheekbones">Cheekbones</option>
      </select>
    </form>
  )
}