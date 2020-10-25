import React from 'react'
import { Progress } from 'Components/Progress'

const radioAnswers = [
    'Sweet',
    'Sour',
    'Lovely',
]

export const Radio = ({ radioInput, setRadioInput}) => {
    return (
        <form>
            <Progress current='2' total='3' />
            <h2> Which one are you?</h2>
            {radioAnswers.map(group => (
        <label className='radio' key={group}>
          <input
            type='radio'
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