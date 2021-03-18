import React, { useState } from 'react'

import { UserName } from './Name'
import { AgeRadioOption } from './Age'
import { SelectPlanet } from './SelectPlanet'
import { BringItem } from './BringItem'
import { SubmitButton } from './SubmitButton'

const ageGroups = ['0-19','20-29','30-39','40-49','50+',] 


export const Form = () => {
  const [age, setAgeGroup] = useState('')
  const [name, setName] = useState('')
  const [item, setInputItem] = useState('')
  const [planet, setPlanet] = useState('')

  const isSurveyComplete = () => {
   
    if (name === '') {
      return false;
    }

    if (age === '') {
      return false;
    }

    if (planet === '') {
      return false;
    }

    if (item === '') {
      return false;
    }

    return true;
  };

  if (isSurveyComplete()) {
    return `So your name is ${name} and you are between ${age} years old.
    The planet you picked is ${planet} and you whant to bring with you:${item}
    Good luck with that!`
  }



  return (
    <form>
      <div>
        <UserName 
        setName={setName}
        name={name}
        />
      </div>
      <div>
      <p>How old are you?</p>
      {ageGroups.map((age) => {
        return (
          <AgeRadioOption 
          ageGroupSpan={age}
          setAgeGroup={setAgeGroup}
          />
        )
      })}
      </div>
      <div>
        <SelectPlanet
        setPlanet={setPlanet}
        planet={planet}
        />
      </div>
      <div>
        <BringItem
         setInputItem={setInputItem}
         item={item}
         />
      </div>
      <div>
        <button onClick={isSurveyComplete}>
          submit
        </button>
      </div>
    </form>
  )
}

