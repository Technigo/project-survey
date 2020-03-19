import React, { useState } from "react";
import { Header } from './components/Header'
import { ColorForm } from './components/ColorForm'
import { GenreForm } from './components/GenreForm'
import { FunForm } from './components/FunForm'
import { Summary } from './components/Summary'

export const App = () => {
  const [place, setPlace] = useState();
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
      title="Welcom to this music survey, enjoy!"
      />
      </section>
      
      <section className="formSection">

      {!showSummary ? (
       <form className="questionForm" onSubmit={handleSubmit}>

       <section>
         <ColorForm 
         title="Where do you like to sing?" 
         infotext="Choose your mood color:"
         place={place} 
         setPlace={setPlace}
         />
        </section>


         <section className="questionBox">
         <GenreForm 
         title="Which music genre will put you in a great mood?" 
         genre={genre} 
         setGenre={setGenre} 
         />
         </section>

         <section className="questionBox">
         <FunForm 
         title="Which song will put you in a great mood?"
         description={description} 
         setDescription={setDescription}
         />
        </section>

        
        <button className="submitButton" type="submit"><p>Submit</p></button>
      
      </form>
       ) : (
       <Summary 

       place={place} 
       genre={genre} 
       description={description} />

       )}

</section>

</div>
)
}
