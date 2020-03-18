import React, { useState } from 'react'

export const Question3 = ({ riding, setRiding }) => {

  return (
    <label>
      <h1>If you lost the ability to walk and had
      to to ride around on an animal for
      the rest of your life. Which one would you choose?</h1>

      <input
        type="radio"
        value="Kangaroo" 
        onChange={event => setRiding(event.target.value)}
        checked={riding === "Kangaroo"}
      />
      Kangaroo

      <input
        type="radio"
        value="Giraffe"
        onChange={event => setRiding(event.target.value)}
        checked={riding === "Giraffe"}
      />
        Giraffe

      <input
        type="radio"
        value="Hippo"
        onChange={event => setRiding(event.target.value)}
        checked={riding === "Hippo"}
      />
        Hippo
    </label>

  )
}