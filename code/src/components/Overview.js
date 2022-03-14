import React, {useState} from 'react'


export const Overview = ({ pronoun, state }) => {
  return (
    <section>
    <div className='initation-card--wrapper'>
      <h1>{state.name}</h1>
        <h2>Invites you to celebrate {pronoun} {state.age} birthday</h2>   
        <p>{state.date} {state.timeFrom} - {state.timeTo}</p>
        <p>The party will be held at {state.location}</p>
        <p>RVSP TO {state.rvspTo} {state.rvspDate}</p>
        <p>{state.gift}</p> 
      </div>
    </section>
  )
}