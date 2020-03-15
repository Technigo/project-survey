import React, { useState } from "react";

export const Selectanimal = () => {
  const [animal, setAnimal] = useState('')

  return (

    <form>
      <h3>What is your favorite animal?</h3>
      <select
        onChange={event => setAnimal(event.target.value)}
        value={animal}

      >
        <option value="">Select animal:</option>
        <option value="guinea pig">Guinea pig</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        

      </select>
    </form>
  )
}