/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import '../index.css'
import '../purchase.css'

const purchases = ['1-2 times', '3-5 times', '6-10 times', '10+ times']
console.log(purchases)

const purchaseQuestion = ({ purchase, setPurchase }) => {
  const handleNumberPurchases = (event) => {
    setPurchase(event.target.value)
  }

  return (
    <>
      <h2>How often per week do you purchase something to drink in a cafe?</h2>
      <form className="radio-buttons" id="radio-buttons">
        {purchases.map((group) => (
          <label key={group} className="times-purchase">
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