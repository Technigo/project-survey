import React from 'react';

export const Pax = ({ pax, setPax, paxChild, setChildPax, age, setAge }) => {
  const handlePaxChange = (event) => {
    setPax(event.target.value)
  }
  const handleChildrenPaxChange = (event) => {
    setChildPax(event.target.value)
  }
  const handleAgeChange = (event) => [
    setAge(event.target.value)
  ]
  return (
    <form>
      <div className="drop-down">
        <h2>To prepare a proper proposal
             we need to a little bit more about who will travel with us.
        </h2>
        <label htmlFor="Pax">
        How many adults?
          <select value={pax} onChange={handlePaxChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </label>
        <label htmlFor={paxChild}>
          How many children (below 18 year old?)
          <select value={paxChild} onChange={handleChildrenPaxChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </label>
        <label htmlFor={age}>
          <p> How old are children? For example: 11, 12, 16</p>
          <input type="text" value={age} onChange={handleAgeChange} />
        </label>

      </div>

    </form>

  )
}

