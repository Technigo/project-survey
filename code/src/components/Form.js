import React, { useState } from 'react'

import { UserName } from './Name'
import { AgeRadioOption } from './Age'
import { SelectPlanet } from './SelectPlanet'
import { BringItem } from './BringItem'
import { Summary } from './Summery'

const ageGroups = ['0-19','20-29','30-39','40-49','50+',] 


export const Form = () => {
  const [age, setAgeGroup] = useState('')
  const [name, setName] = useState('')
  const [item, setInputItem] = useState('')
  const [planet, setPlanet] = useState('')
  const [summary, setSummary] = useState(false)

  const handelSubmit = event => {
    event.preventDefault()
    setSummary(true)
  }

 return (
   <>
   {! summary ? (
    <form className='form-container' onSubmit={handelSubmit}>
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
        <button>
          submit
        </button>
      </div>
    </form>
    ):(
      <Summary 
      name={name} 
      ageGroupSpan={age} 
      planet={planet} 
      item={item}
      />

    )}
    </>
  )
}

