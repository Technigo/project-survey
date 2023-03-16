import React from 'react';

const flavorList = [
  'sweet',
  'salty'
]

export const Flavor = ({ flavor, setFlavor }) => {
  return (
    <>
        My finest acquaintances call me:
      {flavorList.map((dispositions) => (
        <label htmlFor="flavor-question" key={dispositions}>
          <input
            id="flavor-question"
            type="radio"
            value={dispositions}
            onChange={(event) => setFlavor(event.target.value)}
            checked={flavor === dispositions} />
          {dispositions}
        </label>
      ))}
    </>
  )
}