import React from 'react';

export const DestinationQuestion = ({
  dest, setDest,
  destTwo, setDestTwo, destThree, setDestThree
}) => {
  const handleDestTwoChange = (event) => {
    setDestTwo(event.target.value)
  }
  const handleDestThreeChange = (event) => {
    setDestThree(event.target.value)
  }
  const handleDestChange = (event) => {
    setDest(event.target.value)
  }
  return (
    <form>
      <div className="destinationChoice">
        <h2> How long flight time would be ok for you? </h2>

        <label htmlFor="dest">
           2-3 hours
          <input type="radio" name="2-3 hours" value={dest} onChange={handleDestChange} />
        </label>
        <label htmlFor="dest">
          4-5 hours
          <input type="radio" name="4-5 hours" value={destTwo} onChange={handleDestTwoChange} />
        </label>
        <label htmlFor="dest">
          N/A
          <input type="radio" name="n/a" value={destThree} onChange={handleDestThreeChange} />
        </label>

      </div>
    </form>

  )
}