import React, { useState } from 'react';

const ThirdQuestion = () => {
  const [animal, setAnimal] = useState();

  return (
    <label htmlFor="favorite-animal">Choose you favorite animal:
      <select name="favorite-animal" id="fav-animal" onChange={(event) => setAnimal(event.target.value)}>
        <option value=" "> </option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="camel">Camel</option>
        <option value="sloth">Sloth</option>
      </select>
      <p>Favorite animal:{animal}</p>
    </label>
  )
}

export default ThirdQuestion;