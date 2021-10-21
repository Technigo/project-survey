import React, { useState } from 'react'

import Name from './Name'
import Radio from './Radio'
import Dropdown from './Dropdown'
import Song from './Song'
import Overview from './Overview'

const Form = () => {
  const [startImage] = useState("");
  const [nameInput, setNameInput] = useState('')
  const [radioInput, setRadioInput] = useState([])
  const [dropdownInput, setDropdownInput] = useState('')
  const [songInput, setSongInput] = useState('')
  const [step, setStep] = useState(0)


  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }
  const onRadioInputChange = (event) => {
    setRadioInput(event.target.value)
  }
  const onDropdownInputChange = (event) => {
    setDropdownInput(event.target.value)
  }
  const onSongInputChange = (event) => {
    setSongInput(event.target.value)
  }

  const onStepChange = () => {
    setStep(step + 1)
  }

  const onPreviousQuestionChange = () => {
    setStep(step - 1);
  };

	return (
    <>
    <header>
        		{step <= 5 && <p>Question number: {step}/5</p>}
    </header>
    <main className="main-container">
		<section className="survey-container">
      {step === 0 && (
        <>
            <div aria-label="image of horror poster" className="image-container">
            <button className="btn" onClick={onStepChange}>
                Start
              </button>
              <img
                className="start-image"
                value={startImage}
                src="https://i.ibb.co/hyPxMWW/horror.png"
                alt="horror-image"
              />
            </div>
        </>
      )}
			{step === 1 && (
				<Name
					nameInput={nameInput}
					onNameInputChange={onNameInputChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 2 && (
				<Radio
          radioInput={radioInput}
					onRadioInputChange={onRadioInputChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
					onStepChange={onStepChange}
				/>
			)}
      {step === 3 && (
				<Dropdown
          dropdownInput={dropdownInput} 
          onDropdownInputChange={onDropdownInputChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
					onStepChange={onStepChange} 
          />
			)}
      {step === 4 && (
				<Song
          songInput={songInput} 
          onSongInputChange={onSongInputChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
					onStepChange={onStepChange} 
          />
			)}
			{step === 5 && (
				<Overview 
          nameInput={nameInput} 
          radioInput={radioInput} 
          dropdownInput={dropdownInput}
          songInput={songInput}
          />
			)}
		</section>
    </main>
    <footer>Photo by <a href="https://unsplash.com/@jeneyeo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jene Yeo</a> on <a href="https://unsplash.com/s/photos/horror?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </footer>
    </>
	)
}

export default Form
