import React, { useState } from 'react';

import { WelcomePage } from './Components/WelcomePage';
import { TextInput } from './Components/TextInput';
import { RadioButtons } from './Components/RadioButtons';
import { SelectDropdownDrink } from './Components/SelectDropdownDrink';
import { DropdownSnacks } from './Components/DropdownSnacks';
import { Summary } from './Components/Summary';

// All the useStates
export const Form = () => { 
    const [name, setName] = useState('');
    const [snack, setSnack] = useState ('');
    const [drink, setDrink] = useState ('');
    const [game, setGamesList] = useState('');
    const [section, setSection] = useState('welcomePage');

// Components made into an array to build the multistep 

    const sectionOrder = [
        'welcomePage',
        'nameQuestion',
        'gameQuestion',
        'drinkQuestion',
        'snackQuestion',
        'summary'
    ];

// Function that prevents refreshing the page, as well as, use of indexOf method to go through the different steps 
// by the use of useState that starts in the welcome page and then adds +1 moving this way through the array 

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
                    {section === 'welcomePage' && (
                        <WelcomePage/>   
                    )}
                    {section === 'nameQuestion' && (
                        <TextInput name={name} setName={setName}/>   
                    )}
                    {section === 'gameQuestion' && (
                        <RadioButtons game={game} setGamesList={setGamesList}/>
                    )}
                    {section === 'drinkQuestion' && (
                        <SelectDropdownDrink drink={drink} setDrink={setDrink}/>
                    )}
                    {section === 'snackQuestion' && (
                        <DropdownSnacks snack={snack} setSnack={setSnack}/>   
                    )} 
                    <button 
                        tabIndex ='0'
                        type='submit'
                        aria-pressed='false'
                        aria-label='Next question'
                    > Next!
                    </button>
                </form>            
                ):(           
                <div className='summary-container'>
                    <Summary 
                        name={name} 
                        game={game} 
                        drink={drink} 
                        snack={snack} 
                    />
                </div>
                )
            }
        </section>
        </>
    );
};