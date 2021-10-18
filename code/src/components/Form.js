import React, { useState } from 'react'

import Name from './Name'
import Music from './Music'
import Artist from './Artist'
import Song from './Song'
import Overview from './Overview'

const Form = () => {
  const [nameInput, setNameInput] = useState('')
  const [musicInput, setMusicInput] = useState('')
  const [artistInput, setArtistInput] = useState('')
  const [songInput, setSongInput] = useState('')
  const [step, setStep] = useState(1)
  // const [counter, setCounter] = useState(0)

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }
  const onMusicInputChange = (event) => {
    setMusicInput(event.target.value)
  }
  const onArtistInputChange = (event) => {
    setArtistInput(event.target.value)
  }
  const onSongInputChange = (event) => {
    setSongInput(event.target.value)
  }

  const onStepChange = () => {
    setStep(step + 1)
  }

	return (
		<div>
			{step === 1 && (
				<Name
					nameInput={nameInput}
					onNameInputChange={onNameInputChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 2 && (
				<Music
          MusicInput={musicInput}
					onMusicInputChange={onMusicInputChange}
					onStepChange={onStepChange}
				/>
			)}
      {step === 3 && (
				<Artist
          artistInput={artistInput} 
          onArtistInputChange={onArtistInputChange}
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
          musicInput={musicInput} 
          artistInput={artistInput}
          />
			)}
		</div>
	)
}
{/* <div> */}
  {/* <div>My counter is: {counter}</div> */}
    {/* <button onClick={() => setCounter(counter + 1)}>Click</button> */}
   {/* </div> */}
export default Form
