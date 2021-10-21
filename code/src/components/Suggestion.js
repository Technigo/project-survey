import React from 'react'
import { FirstPersonShooter } from './FirstPersonShooter'
import { Moba } from './Moba'
import { Strategy } from './Strategy'
import { Survival } from './Survival'

//Gives suggestions on what games to play depending on the inputs
export const Suggestion = ({ moodInput, viewInput }) => {
  return (
    <div className='step-container'>
      <h2>You should play:</h2>

      {viewInput === 'From my own perspective' &&
        (moodInput === 'Chill' || moodInput === 'Overthinking' ? (
          <FirstPersonShooter />
        ) : (
          <Survival />
        ))}

      {viewInput === 'Watching from the outside' && <Strategy />}

      {viewInput === 'By controlling others' && <Moba />}
    </div>
  )
}
