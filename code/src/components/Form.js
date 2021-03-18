import React, { useState } from 'react'

import { UserName } from './Name'
import { AgeRadioOption } from './Age'
import { SelectPlanet } from './SelectPlanet'
import { BringItem } from './BringItem'
import { Summary } from './Summery'




export const Form = () => {
  const [ageGroupSpan, setAgeGroup] = useState('')
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
          <AgeRadioOption 
          ageGroupSpan={ageGroupSpan}
          setAgeGroup={setAgeGroup}
          />
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
        <button className='submit-button' type='submit'>Submit!</button>
          
       
      </div>
    </form>
    ):(
      <Summary 
      name={name} 
      ageGroupSpan={ageGroupSpan} 
      planet={planet} 
      item={item}
      />

    )}
    </>
  )
}

