import React from 'react';

const Condiments = () => {

  return (
    <div>
      <p>What is your go-to condiment?</p>
      <label htmlFor="mustard">Mustard</label>
      <input id="mustard" type="radio" />
      <label htmlFor="mayo">Mayo</label>
      <input id="mayo" type="radio" />
      <label htmlFor="tomato-sauce">Tomato sauce</label>
      <input id="tomato-sauce" type="radio" />
      <label htmlFor="garlic-sauce">Garlic sauce</label>
      <input id="garlic-sauce" type="radio" />
      <label htmlFor="remoulade">Remoulade</label>
      <input id="remoulade" type="radio" />
    </div>
  )
}

export default Condiments