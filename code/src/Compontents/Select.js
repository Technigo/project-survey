import React, { useState } from 'react'

export const Select = () => {
  const [tech, setTech] = useState("")
  return (
    <form>
      Which is your favourite tech?
      <select
        onChange={event => setTech(event.target.value)}
        value={tech}
      >
        <option value="">Select tech:</option>
        <option value="HTML">HTML</option>
        <option value="CSS3">CSS3</option>
        <option value="Javascript ES6">Javascript ES6</option>
        <option value="React">Rect</option>
        <option value="Node.js">Node.js</option>
      </select>
    </form>
  )
}