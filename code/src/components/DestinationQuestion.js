import React from 'react';

export const DestinationQuestion = ({ dest, setDest }) => {
  const handleDestChange = (event) => {
    setDest(event.target.value)
  }
  return (
    <form>
      <div className="destinationChoice">
        <h2> How long flight time would be ok for you? </h2>

        <label htmlFor={DestinationQuestion}>
           2-3 hours
          <input type="radio" name="2-3 hours" value={dest} onChange={handleDestChange} />
        </label>
        <label htmlFor={DestinationQuestion}>
          4-5 hours
          <input type="radio" name="4-5 hours" value={dest} onChange={handleDestChange} />
        </label>
        <label htmlFor={DestinationQuestion}>
          N/A
          <input type="radio" name="n/a" value={dest} onChange={handleDestChange} />
        </label>

      </div>
    </form>

  )
}