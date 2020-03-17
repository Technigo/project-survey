import React, { useState } from "react";
import { ColorForm } from './ColorForm'
import { GenreForm } from './GenreForm'

import { Button } from './Button'

const colorGroups = ["Blue", "Yellow", "Red", "Green", "Gray"];

export const App = () => {
  const [colorGroup, setColorGroup] = useState();
  const [Genre, setGenre] = useState("");
  const [showNext, setShowNext] = useState(false);

  const handleShowNext = event => {
    event.preventDefault();
    setShowNext(true);
  }
  return (

   <div>
      <div className="firstSection">
       {!showNext &&<form className="chooseColorForm" onSubmit={handleShowNext}>
        <ColorForm/>
          {colorGroups.map(group => (
          <label key={group}>
          {group}
          <input
          type="checkbox"
          value={group}
          onChange={event => setColorGroup(event.target.value)}
          checked={colorGroup === group}
        />
       </label>
      ))}
      <section className="buttonContainer">
     <Button title="Enter" />
     </section>
   </form>}
    </div>

  <div className="secondSection">
      {showNext && <GenreForm />}
       <form className="chooseGenreForm">
        <select
        onChange={event => setGenre(event.target.value)}
        value={Genre}>
        <option value="">Choose your genre:</option>
        <option value="Pop">Pop</option>
        <option value="Rock">Rock</option>
        <option value="Hiphop">Hiphop</option>
        <option value="Country">Country</option>
        <option value="RnB">RnB</option>
        </select>
    </form>
  </div>
  
    </div>
  )
}
