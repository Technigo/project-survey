import React, { useState } from 'react'

const satisfiedGroup = [
  'Not likely',
  'Likely',
  'Very likely'
]

export const Radio = () => {
  const [satisfied, setSatisfied] = useState()
  return (
    <form>
      How likely are you to....
      {satisfiedGroup.map((group) => (
        <label key={group}>
          <input
            type="radio"
            value={group}
            onChange={(event) => setSatisfied(event.target.value)}
            checked={satisfied === group}
          />
          {group}
        </label>
      ))}
    </form>
  )
}