import React from 'react';

export const DestinationQuestion = ({ dest, setDest }) => {
  const handleDestChange = (event) => {
    setDest(event.target.value)
  }
  return (
    <form>
      <div className="destinationChoice">
        <h2> How long flight time would be ok for you? </h2>

        <label htmlFor="dest">
           2-3 hours
          <input type="radio" name="2-3 hours" value="2-3 hours" checked={dest === '2-3 hours'} onChange={(e) => handleDestChange(e)} />
        </label>
        <label htmlFor="dest">
          4-5 hours
          <input type="radio" name="4-5 hours" value="4-5 hours" checked={dest === '4-5 hours'} onChange={(e) => handleDestChange(e)} />
        </label>
        <label htmlFor="dest">
          N/A
          <input type="radio" name="n/a" value="n/a" checked={dest === 'n/a'} onChange={(e) => handleDestChange(e)} />
        </label>

      </div>
    </form>

  )
}