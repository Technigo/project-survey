import React, { useState } from "react";
import { ColorForm } from './components/ColorForm'
import { GenreForm } from './components/GenreForm'
import { FunForm } from './components/FunForm'
import { Button } from './components/Button'

export const App = () => {
  const [colorGroup, setColorGroup] = useState();
  const [genre, setGenre] = useState("");
  const [description,setDescription] = useState("");
  
  return (

   <div>
      <section className="firstSection">
       <form className="questionForm">
         
         <ColorForm 
         title="How do you feel today?" 
         infotext="Choose your mood color:"
         colorGroup={colorGroup} 
         setColorGroup={setColorGroup}
         />

         <GenreForm 
         title="What type of music do you like?" 
         Genre={genre} 
         setGenre={setGenre} 
         />

         <FunForm 
         title="Write what make you feel good?"
         name={description} 
        setDescription={setDescription}
         />

       <section className="buttonContainer">
         <Button title="Enter" />

  </section>
  </form>
  </section>
  </div>
  )
}
