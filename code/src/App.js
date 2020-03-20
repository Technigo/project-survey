import React, { useState } from "react";
import { Header } from './components/Header'
import { CheckedboxForm } from './components/CheckedboxForm'
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
      title="Welcome to this music survey, enjoy!"
      />
      </section>
      
      <section className="formSection">

      {!showSummary ? (
       <form className="questionForm" onSubmit={handleSubmit}>

        <section>
         <CheckedboxForm
         title="Where do you like to sing?" 
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
