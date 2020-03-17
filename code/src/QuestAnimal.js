import React, { useState } from "react";

export const Selectanimal = () => {
  const [animal, setAnimal] = useState('')

  return (

    <label>
      <h3>What is your favorite animal?</h3>
      <select
        onChange={event => setAnimal(event.target.value)}
        value={animal}

      >
        <option value="">Select animal:</option>
        <option value="guinea pig">Guinea pig</option>
        <option value="guinea pig, again">Guinea pig, again</option>
        <option value="guinea pig, of course!">Guinea pig, of course!</option>
        

      </select>
    </label>
  )
}