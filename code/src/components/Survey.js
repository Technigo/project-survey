import React from 'react'
import TextInput from './TextInput'
import Radiobuttons from './Radiobuttons'
import Dropdown from './Dropdown'
import SurveyButtons from './SurveyButtons'

const Survey = ({ step, setStep, name, animal, accessory, activity, ratherNot, handleInputChange }) => {

  const animalOptions = ['cat', 'dog', 'horse', 'elk', 'panda', 'frog']
  const accessoryOptions = ['necklaces', 'watches', 'earrings', 'hats', 'glasses', 'scarfs']
  const activityOptions = ['do yoga', 'play guitar', 'go for a swim', 'play video games', 'go out dancing', 'eat ice cream']
  return (
    <form>
        {step === 1 && (
          <TextInput 
            questionName="name"
            questionText="What's your name? 👧"  
            chosenValue={name} 
            handleInputChange={handleInputChange} />
        )}
        {step === 2 && (
          <Radiobuttons 
            questionName="animal" 
            questionText="Which animal is the cutest? 😺" 
            valueArray={animalOptions} 
            chosenValue={animal} 
            handleInputChange={handleInputChange} />
        )}
        {step === 3 && (
          <Radiobuttons
            questionName="accessory" 
            questionText="What accessory can't you live without? 💍" 
            valueArray={accessoryOptions} 
            chosenValue={accessory} 
            handleInputChange={handleInputChange} />
        )}
        {step === 4 && (
          <Dropdown 
            questionName="activity" 
            questionText="What's your favourite activity? 🏇" 
            optionArray={activityOptions}
            chosenValue={activity} 
            handleInputChange={handleInputChange} />
        )}
        {step === 5 && (
          <TextInput 
            questionName="ratherNot" 
            questionText="Name a thing that you don't like to do 💩" 
            chosenValue={ratherNot} 
            handleInputChange={handleInputChange} />
        )}
        {step > 0 && step < 6 && (
          <>
            <SurveyButtons
              step={step}
              setStep={setStep}
              name={name}
              animal={animal}
              accessory={accessory}
              activity={activity}
              ratherNot={ratherNot}
              />
          </>
        )}
    </form>
  )
}
export default Survey