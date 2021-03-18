import React from 'react'
import TextInput from './TextInput'
import Radiobuttons from './Radiobuttons'
import Dropdown from './Dropdown'
import SurveyButtons from './SurveyButtons'

const Survey = (props) => {

  const [step, setStep, name, setName, animal, setAnimal, accessory, setAccessory, activity, setActivity, ratherNot, setRatherNot] = [props.step, props.setStep, props.name, props.setName, props.animal, props.setAnimal, props.accessory, props.setAccessory, props.activity, props.setActivity, props.ratherNot, props.setRatherNot]

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
            setValue={setName} />
        )}
        {step === 2 && (
          <Radiobuttons 
            questionName="animal" 
            questionText="Which animal is the cutest? 😺" 
            valueArray={animalOptions} 
            chosenValue={animal} 
            setValue={setAnimal} />
        )}
        {step === 3 && (
          <Radiobuttons
            questionName="Accessory" 
            questionText="What accessory can't you live without? 💍" 
            valueArray={accessoryOptions} 
            chosenValue={accessory} 
            setValue={setAccessory} />
        )}
        {step === 4 && (
          <Dropdown 
            questionName="favourite-activity" 
            questionText="What's your favourite activity? 🏇" 
            options={activityOptions}
            chosenValue={activity} 
            setValue={setActivity} />
        )}
        {step === 5 && (
          <TextInput 
            questionName="rather-not" 
            questionText="Name a thing that you don't like to do 💩" 
            chosenValue={ratherNot} 
            setValue={setRatherNot}/>
        )}
        {step > 0 && step < 6 && (
          <SurveyButtons
            step={step}
            setStep={setStep}
            name={name}
            animal={animal}
            accessory={accessory}
            activity={activity}
            ratherNot={ratherNot}
            />
        )}
    </form>
  )
}
export default Survey