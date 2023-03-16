import React from 'react'

export const Drink = ({ drink, setDrink }) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  }

  return (


    <div className="Drink">

<form>

<select onChange = {event => setDrink(event.target.value)}>

          <option value=" "> Select beverage </option>
          <option value="champange">Champange</option>
          <option value="mead">Mead</option>
          <option value="ale">Ale</option>
</select>
</form>
    </div>
)
}