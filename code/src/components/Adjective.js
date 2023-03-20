import React from 'react'

const hornAdjectives = [
  'golden',
  'sparkling',
  'shiny',
  'colorful'
]

export const Adjective = ({ horn, setHorn }) => {
  const handleHornAdjective = (event) => {
    setHorn(event.target.value)
  }
  return (
    <form className="horn-form" onSubmit={(event) => event.preventDefault()} required>
      Choose a magical state:
      {hornAdjectives.map((hornAdjective) => (
        <label key={hornAdjective} htmlFor="myradio">
          <input
            className="radio-btn"
            type="radio"
            value={hornAdjective}
            onChange={handleHornAdjective}
            checked={horn === hornAdjective} />
          {hornAdjective}
        </label>
      ))}

    </form>
  )
}