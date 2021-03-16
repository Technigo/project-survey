import React, { useState } from 'react'
import Image from './Image'

const ageGroups = ["0-18", "19-30", "30+"]

const Radio = () => {
  const [ageGroup, setageGroup] = useState();
  const images = ["./assets/jacket2.jpg", "./assets/jacket3.jpg", "./assets/jacket4.jpg"]

  return (
    <label>
      <p>Age Group:</p>


      {ageGroups.map((group, imageIndex) => (
        <label key={group}>
          <Image image={images[imageIndex]} />
          <input
            type="radio"
            value={group}
            onChange={event => setageGroup(event.target.value)}
            checked={ageGroup === group}
          />
          {group}
        </label>
      ))}
    </label>
  )
}

export default Radio