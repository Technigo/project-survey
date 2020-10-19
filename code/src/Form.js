import React, { useState } from 'react';

import { TextInput } from './Components/TextInput'
import { RadioButtons } from './Components/RadioButtons'
import { SelectDropdownDrink } from 'Components/SelectDropdownDrink'
import { DropdownSnacks } from 'Components/DropdownSnacks'

export const Form = () => { 
    const [name, setName] = useState('');
    const [snack, setSnack] = useState ('');
    const [drink, setDrink] = useState ('');
    const [game, setGamesList] = useState('');
    
    const handleSubmit = event => {
        event.preventDefault();
      };


return (
    <>
    {handleSubmit}
        <TextInput
            name= {name}
            setName= {setName}
        />
        <RadioButtons 
            game= {game}
            setGamesList= {setGamesList}
        />
        <SelectDropdownDrink 
            drink= {drink}
            setDrink= {setDrink}
        />
        <DropdownSnacks
            snack= {snack}
            setSnack= {setSnack}
        
        />
        <div className="submit-button">
        <button type="submit">Submit!</button>
        </div>
    </>

)};
