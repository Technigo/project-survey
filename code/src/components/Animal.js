import React from 'react';

export const Animal = ({ animal, setAnimal }) => {
  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  }
  return (
    <div>
      <p>What animal do you prefer?</p>
      <form>
        <label htmlFor="duck">
        Duck
          <input
            type="radio"
            value="duck"
            onChange={handleAnimalChange}
            checked={animal === 'duck'} />
        </label>

        <label htmlFor="frog">
        Frog
          <input
            type="radio"
            value="frog"
            onChange={handleAnimalChange}
            checked={animal === 'frog'} />
        </label>
      </form>
    </div>
  )
}