import React, { useState } from 'react'

import Name from './Name'
import Radio from './Radio'
import Dropdown from './Dropdown'
import Song from './Song'
import Overview from './Overview'

const Form = () => {
  const [nameInput, setNameInput] = useState('')
  const [radioInput, setRadioInput] = useState([])
  const [dropdownInput, setDropdownInput] = useState('')
  const [songInput, setSongInput] = useState('')
  const [step, setStep] = useState(1)
  const [restart, setRestart] = useState(1)
  // const [counter, setCounter] = useState(0)

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

  const onRestartChange = () => {
    setRestart(restart)
  }

	return (
    <>
    <header>
      
    </header>
    <main className="main-container">
		<section className="survey-container">
			{step === 1 && (
				<Name
					nameInput={nameInput}
					onNameInputChange={onNameInputChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 2 && (
				<Radio
          radioInput={radioInput}
					onRadioInputChange={onRadioInputChange}
					onStepChange={onStepChange}
				/>
			)}
      {step === 3 && (
				<Dropdown
          dropdownInput={dropdownInput} 
          onDropdownInputChange={onDropdownInputChange}
					onStepChange={onStepChange} 
          />
			)}
      {step === 4 && (
				<Song
          songInput={songInput} 
          onSongInputChange={onSongInputChange}
					onStepChange={onStepChange} 
          />
			)}
			{step === 5 && (
				<Overview 
          nameInput={nameInput} 
          radioInput={radioInput} 
          dropdownInput={dropdownInput}
          songInput={songInput}
          onRestartChange={onRestartChange}
          />
			)}
		</section>
    </main>
    <footer>Photo by <a href="https://unsplash.com/@solidpixel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pelly Benassi</a> on <a href="https://unsplash.com/s/photos/horror-it?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </footer>
    </>
	)
}

export default Form
