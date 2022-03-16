import { arraySchema } from 'eslint-plugin-jsx-a11y/lib/util/schemas'
import React from 'react'

import { PennantImage } from './PennantImage'
 

export const Overview = ({ pronoun, state }) => {

  let possPronoun
  if (pronoun === 'she/her') {
    possPronoun = 'her'
  } else if (pronoun === 'he/him') {
    possPronoun = 'his'
  } else {
    possPronoun = 'thier'
  }

  //return month as month
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  
  const date = state.date
  console.log(date)
  const formattedDate = new Date(date);
  console.log(formattedDate)
  let currentMonth =  formattedDate.getMonth();
  currentMonth += 1;  // JavaScript months are 0-11
  console.log('m', currentMonth)

  // const month = months
// loop thoruh arraySchema, print index that is equal to current month??
  // if else for ThemeInput, find out how to change on svg

  return (
      <div className='invitation-card--wrapper'>
        {/* <img className='pennant' src={Pennant} alt='Pennant flags'/> */}
        <PennantImage 
          color={state.theme}
          alt='pennant in colors'
        />
        <h1>{state.name}</h1>
        <h2>Invites you to celebrate {possPronoun} {state.pronouns} {state.age} birthday</h2>   
        <p>{state.date} {state.timeFrom} - {state.timeTo}</p>
        <p>The party will be held at {state.location}</p>
        <p>RVSP TO {state.rvspTo} {state.rvspContactDetails}</p>
        <p>{state.gift === 'Donation' ? 'Please, no gifts! Consider a donation instead.' : ''}</p> 
      </div>
  )
}