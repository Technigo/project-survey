/* eslint-disable linebreak-style */
import React, { useState } from 'react'
const funScaleOption = ["1", "2", "3", "4", "5"]

export const App = () => {
  const [option, setOption] = useState("")
  const [funScale, setFunScale] = useState()

  return (
    <form>
      <label>
        <h2>Option</h2>
        <select onChange={event => setOption(event.target.value)} value={option}>
          <option value="">Select option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </label>

      <label>
        <h2>Scale</h2>
        {funScaleOption.map(fun => (
          <label key={fun}>
            <input type="radio" value={fun} onChange={event => setFunScale(event.target.value)} checked={funScale === fun} />
            {fun}
          </label>
        ))}
      </label>
    </form>
  )
}
