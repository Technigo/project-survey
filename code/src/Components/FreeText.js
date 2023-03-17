import React from 'react'
import '../index.css'

const freeText = ({ headline, input, setInput, inputLabel, id, placeholder, htmlFor }) => {
  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <>
      <h2>{headline}</h2>
      <form>
        <label htmlFor={htmlFor}>
          <p>{inputLabel}</p>
        </label>
        <textarea
          type="text"
          id={id}
          className="text-input"
          placeholder={placeholder}
          aria-live="polite"
          onChange={handleInputChange}
          value={input} />
      </form>
    </>
  )
}

export default freeText