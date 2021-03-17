import React, { useState } from 'react'

import { Name } from './Name'
import { AgeRadioOption } from './Age'
import { SelectPlanet } from './SelectPlanet'
import { BringItem } from './BringItem'
import { SubmitButton } from './SubmitButton'

const ageGroups = ['0-19','20-29','30-39','40-49','50+',] 


export const Form = () => {
  const [age, setAgeGroup] = useState('')



  return (
    <form>
      <div>
        <Name />
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
        <SelectPlanet />
      </div>
      <div>
        <BringItem />
      </div>
      <div>
        <SubmitButton />
      </div>
    </form>
  )
}

