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
        <SelectPlanet />
      </div>
      <div>
        <BringItem
         setInputItem={setInputItem}
         item={item}
         />
      </div>
      <div>
        <SubmitButton />
      </div>
    </form>
  )
}

