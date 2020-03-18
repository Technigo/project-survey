import React from 'react'
import { Progress } from 'Compontents/Progress'

export const Select = ({ tech, setTech }) => {

  return (
    <form>
      <Progress current='1' total='3' />
      <p>Which is your <span className="bold">favorite tech</span> so far?</p>
      <select
        onChange={event => setTech(event.target.value)}
        value={tech}
        required
      >
        <option value=""></option>
        <option value="HTML">HTML</option>
        <option value="CSS3">CSS3</option>
        <option value="Javascript ES6">Javascript ES6</option>
        <option value="React">React</option>
        <option value="Node.js">Node.js</option>
      </select>
    </form>
  )
}