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
    const [section, setSection] = useState('nameQuestion');

    const sectionOrder = [
        'nameQuestion',
        'gameQuestion',
        'drinkQuestion',
        'snackQuestion',
        'summary'
    ];
    
    const handleSubmit = event => {
        event.preventDefault();
        const nextSectionIndex = sectionOrder.indexOf(section);
        setSection(sectionOrder[nextSectionIndex+1]);   
      };

    return (
    <>
    <h1 tabIndex='0'>VR Games Night!</h1>
    <section className='form-container'>
        {section !== 'summary' ? (
            <form onSubmit={handleSubmit}>
                {section === 'nameQuestion' && (
                    <TextInput name= {name} setName= {setName}/>   
                )}
                {section === 'gameQuestion' && (
                        <RadioButtons game= {game} setGamesList= {setGamesList}/>
                )}
                {section === 'drinkQuestion' && (
                        <SelectDropdownDrink drink= {drink} setDrink= {setDrink}/>
                )}
                {section === 'snackQuestion' && (
                    <DropdownSnacks snack= {snack} setSnack= {setSnack}/>   
                )} 
                <button 
                    tabIndex ='0'
                    type='submit'
                    aria-label='Next question'
                    disabled={name === '' }> Next!
                </button>
            </form>
            
            ):(
                
            <div className='summary-container'>
                <Summary name={name} game={game} drink={drink} snack={snack} />
            </div>
        )}
    </section>
   </>
)}