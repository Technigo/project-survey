import React, { useState } from 'react'

export const Question3 = ({ riding, setRiding }) => {

  return (
    <label>
      <h1>If you lost the ability to walk and had
      to to ride around on an animal for
      the rest of your life. Which one would you choose?</h1>
      <div className="radio-container">
        <div>
          <input
            className="form-radio"
            type="radio"
            value="Kangaroo"
            onChange={event => setRiding(event.target.value)}
            checked={riding === "Kangaroo"}
          />
      Kangaroo
      </div>

        <div>
          <input
            className="form-radio"
            type="radio"
            value="Giraffe"
            onChange={event => setRiding(event.target.value)}
            checked={riding === "Giraffe"}
          />
        Giraffe
      </div>

        <div>
          <input
            className="form-radio"
            type="radio"
            value="Hippo"
            onChange={event => setRiding(event.target.value)}
            checked={riding === "Hippo"}
          />
        Hippo
        </div>
      </div>
    </label>

  )
}