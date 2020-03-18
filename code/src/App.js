import React, { useState } from "react";
import { ColorForm } from './components/ColorForm'
import { GenreForm } from './components/GenreForm'
import { FunForm } from './components/FunForm'
import { Button } from './components/Button'

export const App = () => {
  const [colorGroup, setColorGroup] = useState();
  const [genre, setGenre] = useState("");
  const [name, setName] = useState("");
  
  return (

   <div>
      <div className="firstSection">
       <form className="theForm">
         <ColorForm name="How do you feel today?" colorGroup={colorGroup} setColorGroup={setColorGroup}/>
         <GenreForm Genre={genre} setGenre={setGenre} />
         <FunForm name={name} setName={setName}/>

       <section className="buttonContainer">
         <Button title="Enter" />

  </section>
  </form>
  </div>
  </div>
  )
}
