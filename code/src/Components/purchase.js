import React from 'react'

const Purchases = [
  '1-2',
  '3-5',
  '6-10',
  '10+']
console.log(Purchases)

const PurchaseQuestion = ({purchase, setPurchase}) => {
  const handleNumberPurchases = (event) => {
    setPurchase(event.target.value)
  }

  return (
    <>
      <h2>How often per week do you purchase something to drink in a café?</h2>
      <form className="radio-buttons" id="radio-buttons">
        {Purchases.map(group => (
          <label key ={group}>
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

export default PurchaseQuestion