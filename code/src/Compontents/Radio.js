import React from 'react'
import { Progress } from 'Compontents/Progress'

const answerGroup = [
  'Absolutely',
  'Maybe',
  'Definitely'
]

export const Radio = ({ radioInput, setRadioInput }) => {

  return (
    <form>
      <Progress current='2' total='3' />
      <p>Would you recommend your friends to <span className="bold">start coding?</span></p>
      {answerGroup.map(group => (
        <label className="radio" key={group}>
          <input
            type="radio"
            value={group}
            onChange={event => setRadioInput(event.target.value)}
            checked={radioInput === group}
          />
          {group}
        </label>
      ))
      }
    </form>
  )
}
