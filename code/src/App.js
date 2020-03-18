import React, { useState } from "react";
import { Header } from './components/Header'
import { ColorForm } from './components/ColorForm'
import { GenreForm } from './components/GenreForm'
import { FunForm } from './components/FunForm'
import { Summary } from './components/Summary'

export const App = () => {
  const [platformGroup, setPlatfromGroup] = useState();
  const [genre, setGenre] = useState("");
  const [description,setDescription] = useState("");

  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (

   <div>

     <section className="surveyHeader">
      <Header 
      title="The Music Survey"
      />
      </section>
      
      <section className="formSection">

      {!showSummary ? (
       <form className="questionForm" onSubmit={handleSubmit}>
   
        <section>
         <ColorForm 
         title="What platfrom do you use to listen to music?" 
         platformGroup={platformGroup} 
         setPlatfromGroup={setPlatfromGroup}
         />
        </section>
  
         <section className="questionBox">
         <GenreForm 
         title="What type of music do you like?" 
         setGenre={setGenre} 
         />
         </section>

         <section className="questionBox">
         <FunForm 
         title="Which is you go to song?"
         setDescription={setDescription}
         />
        </section>
        
        <button className="submitButton" type="submit">Submit</button>
      
      </form>
       ) : (
       <Summary 
       
       platformGroup={platformGroup} 
       genre={genre} 
       description={description} />
       )}
       
</section>

</div>
)
}
