/* eslint-disable linebreak-style */
import React, { useState } from 'react'

export const App = () => {
  const [option, setOption] = useState("")

  return (
    <form>
      <select onChange={event => setOption(event.target.value)} value={option}>
        <option value="">Select option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </form>
  )
}
