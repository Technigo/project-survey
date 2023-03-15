/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

const purchases = ['1-2', '3-5', '6-10', '10+']
console.log(purchases)

const purchaseQuestion = ({ purchase, setPurchase }) => {
  const handleNumberPurchases = (event) => {
    setPurchase(event.target.value)
  }

  return (
    <>
      <h2>How often per week do you purchase something to drink in a cafe?</h2>
      <form className="radio-buttons" id="radio-buttons">
        {purchases.map(group => (
          <label key={group}>
            <input
              type="radio"
              className="radio-button"
              value={group}
              onChange={handleNumberPurchases}
              checked={purchase === group} />
            {group}
          </label>
        ))}
      </form>
    </>
  )
}

export default purchaseQuestion