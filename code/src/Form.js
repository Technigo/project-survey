import React, { useState } from 'react';

import { TextInput } from './Components/TextInput'
import { RadioButtons } from './Components/RadioButtons'
import { SelectDropdownDrink } from './Components/SelectDropdownDrink'
import { DropdownSnacks } from './Components/DropdownSnacks'
import { Summary } from './Components/Summary'

export const Form = () => { 
    const [name, setName] = useState('');
    const [snack, setSnack] = useState ('');
    const [drink, setDrink] = useState ('');
    const [game, setGamesList] = useState('');
    const [showSummary, setShowSummary] = useState(false);
    

    
    const handleSubmit = event => {
        event.preventDefault();
        setShowSummary(true)
      };

return (
    <>
    <h1>VR Games Night!</h1>
    <section className="form-container">
        {!showSummary ? (
            <form onSubmit={handleSubmit}>
                <TextInput name= {name} setName= {setName}/>
                <RadioButtons game= {game} setGamesList= {setGamesList}/>
                <SelectDropdownDrink drink= {drink} setDrink= {setDrink}/>
                <DropdownSnacks snack= {snack} setSnack= {setSnack}/>    
                <button tabIndex ="0" type="submit" disabled={name === '' }> Count me in! </button>
            </form>
            
            ):(
            <div className="summary-container">
                <Summary name={name} game={game} drink={drink} snack={snack} />
            </div>
        )}
    </section>
   </>
)}