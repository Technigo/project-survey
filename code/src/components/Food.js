import React from 'react'

const whatFood = [
  'Let them eat cake',
  'Bitter tasting sweetpeasoup',
  'Morphine and cocain'];

export const Food = ({ food, setFood }) => {
  const handleFoodChange = (event) => {
    setFood(event.target.checked)
  }
  return (
    <div className="eat">
      <form onSubmit={(event) => event.preventDefault()}>
        What's for dinner?
        {whatFood.map((dinner) => (
          <lable key={dinner}>
            <input
              type="checkbox"
              checked="{food}"
              onChange={(event) => setFood(event.target.checked)} />
            {dinner}
          </lable>
        ))}
      </form>
    </div>
  )
}