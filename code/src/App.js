/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { Summary } from './Summary'
const funScaleOption = ["1", "2", "3", "4", "5"]

export const App = () => {
  const [name, setName] = useState("")
  const [option, setOption] = useState("")
  const [funScale, setFunScale] = useState()
  const [slide, setSlide] = useState()
  const [submit, setSubmit] = useState(false)
  const isEnabled = name.length > 0

  return (
    <section>
      {!submit && (
        <form onSubmit={event => event.preventDefault()}>

          <label>
            <h2>Name</h2>
            <input type="text" onChange={event => setName(event.target.value)} value={name} />
          </label>

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

          <label>
            <h2>Slider</h2>
            <input type="range" min="1" max="5" onChange={event => setSlide(event.target.value)} value={slide} />
          </label>

          <button type="submit" disabled={!isEnabled} onClick={() => setSubmit(true)}>Submit</button>
        </form>
      )}

      <section>
        {submit &&
          <div>
            <Summary name={name} option={option} funScale={funScale} slide={slide} />
            <button type="button" onClick={() => setSubmit(false)}>Reset</button>
          </div>}
      </section>
    </section>
  )
}
