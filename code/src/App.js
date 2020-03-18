import React, { useState } from 'react'
import { Summary } from './components/Summary'
import { NameEntry } from './components/NameEntry'
import { ColorEntry } from './components/ColorEntry'
import { AnimalEntry } from './components/AnimalEntry'



export const App = () => {
  const[name, setName] = useState("");
  const [color, setColor] = useState()
  const[showSummary, setShowSummary] = useState(false)
  const [animal, setAnimal] = useState();
  
  const  handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true)
  };
  
    return (
    <div className="app">
      <h1> Welcome!</h1>
      {!showSummary ? (
        <form onSubmit={handleSubmit}>
          <NameEntry name={name} setName={setName}/>
          <ColorEntry color={color} setColor={setColor} />   
          <AnimalEntry animal={animal} setAnimal={setAnimal} /> 
            <button onSubmit>Submit</button> 
            </form>
         
      ) : (
      
        <Summary name={name} color={color} animal={animal}/>
      )}
    </div>
  );
};


