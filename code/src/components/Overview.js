import React from 'react'

export const Overview = ({ pronoun, state }) => {

  let possPronoun
  if (pronoun === 'she/her') {
    possPronoun = 'her'
  } else if (pronoun === 'he/him') {
    possPronoun = 'his'
  } else {
    possPronoun = 'thier'
  }

  // if else for ThemeInput, find out how to change on svg

  return (
      <div className='initation-card--wrapper'>
        <h1>{state.name}</h1>
        <h2>Invites you to celebrate {possPronoun} {state.pronouns} {state.age} birthday</h2>   
        <p>{state.date} {state.timeFrom} - {state.timeTo}</p>
        <p>The party will be held at {state.location}</p>
        <p>RVSP TO {state.rvspTo} {state.rvspDate}</p>
        <p>{state.gift === 'No' ? 'Please, no gifts! Consider a donation instead.' : ''}</p> 
      </div>
  )
}