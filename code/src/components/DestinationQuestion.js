import React from 'react';

export const destination = ({ dest, setDest }) => {
  const handleDestChange = (event) => {
    setDest(event.target.value)
  }
  return (
    <form>
      <div className="destinationChoice">
        <h2>Hello {name}. Where would you like to travel? </h2>
        <input type="radio" name="Europe" value={dest} />
      </div>
    </form>
  )
}