import React, { useState } from 'react'

import StartingPage from './StartingPage'
import FirstQuestion from "./FirstQuestion"
import SecondQuestion from "./SecondQuestion"
import ThirdQuestion from './ThirdQuestion'
import FourthQuestion from './FourthQuestion'
import FifthQuestion from './FifthQuestion'
import Overview from "./Overview"
import Footer from './Footer'

const animalArray = ['🐢', '🐯', '🦊', '🐘', '🦛', '🦁']

const Form = () => {
  const [nameInput, setNameInput] = useState("")
  const [messageInput, setMessageInput] = useState("")
  const [pineappleInput, setPineappleInput] = useState("")
  const [superpowerInput, setSuperpowerInput] = useState("")
  const [animalInput, setAnimalInput] = useState(1)
  const [partyAnimal, setPartyAnimal] = useState(animalArray[animalInput])
  const [section, setSection] = useState(0)

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  const onMessageInputChange = (event) => {
    setMessageInput(event.target.value)
}

const onSuperpowerInputChange = (event) => {
    setSuperpowerInput(event.target.value)
}

const onPineappleInputChange = (event) => {
    setPineappleInput(event.target.value)
}

  const onAnimalInputChange = (event) => {
    setAnimalInput(event.target.value)
    setPartyAnimal(animalArray[event.target.value])
  }

  const onSectionChangeForward = () => {
      setSection(section + 1)
  }

  const onSectionChangeBackward = () => {
      setSection(section - 1)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }


  return (
    <main>
            <form onSubmit = {handleSubmit}>
                {section === 0 && (
                    <StartingPage
                    onSectionChangeForward={onSectionChangeForward}
                    />
                )}
                {section === 1 && (
                    <FirstQuestion
                    nameInput={nameInput}
                    onNameInputChange={onNameInputChange}
                    onSectionChangeForward={onSectionChangeForward}
                    />
                )}
                {section === 2 && (
                    <SecondQuestion
                    nameInput={nameInput}
                    messageInput={messageInput}
                    onMessageInputChange={onMessageInputChange}
                    onSectionChangeBackward={onSectionChangeBackward}
                    onSectionChangeForward={onSectionChangeForward}
                    />
                )}
                {section === 3 && (
                    <ThirdQuestion
                    pineappleInput={pineappleInput}
                    onPineappleInputChange={onPineappleInputChange}
                    onSectionChangeBackward={onSectionChangeBackward}
                    onSectionChangeForward={onSectionChangeForward}
                    />
                )}
                {section === 4 && (
                    <FourthQuestion
                    superpowerInput={superpowerInput}
                    onSuperpowerInputChange={onSuperpowerInputChange}
                    onSectionChangeBackward={onSectionChangeBackward}
                    onSectionChangeForward={onSectionChangeForward}
                    />
                )}
                {section === 5 && (
                    <FifthQuestion
                    animalInput={animalInput}
                    onAnimalInputChange={onAnimalInputChange}
                    partyAnimal={partyAnimal}
                    onSectionChangeBackward={onSectionChangeBackward}
                    onSectionChangeForward={onSectionChangeForward}
                    />
                )}
                {section === 6 && (
                    <Overview
                    nameInput={nameInput}
                    messageInput={messageInput}
                    pineappleInput={pineappleInput}
                    superpowerInput={superpowerInput}
                    partyAnimal={partyAnimal}
                    />
                )}
            </form>
        <Footer />
     </main>
  )
}

export default Form