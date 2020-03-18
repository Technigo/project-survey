import React from 'react'

const animals = [
  'Lion',
  'Dolphin',
  'Shark',
  'Penguin'
]

export const AnimalEntry = ({animal, setAnimal}) => {


  return (
    <form>
      Favourite animal:
      {animals.map((choseAnimal) => (
        <label key={choseAnimal}>
          <input
            type="radio"
            value={choseAnimal}
            onChange={(event) => setAnimal(event.target.value)}
            checked={animal === choseAnimal}
          />
          {choseAnimal}
        </label>
      ))}

    </form>
  );
};