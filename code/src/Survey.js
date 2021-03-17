import React, { useState } from 'react';

import Welcome from './components/Welcome';
import CharacterTextfield from './components/CharacterTextfield';
import { NumberOfSeasonsRadio } from './components/NumberOfSeasonsRadio.js';
import HousesSelect from './components/HousesSelect.js';
import { RateEndingRadio } from './components/RateEndingRadio.js';
import Summary from './components/Summary.js';

const Survey = () => {
    const [name, setName] = useState ('');
    const [numberOfSeasons, setNumberOfSeasons] = useState();
    const [gameOfThronesHouse, setGameOfThronesHouse] = useState('');
    const [rateEnding, setRateEnding] = useState();
    const [section, setSection] = useState("welcome")

    const sectionOrder = [
        'welcome',
        'question1',
        'question2',
        'question3',
        'question4',
        'summary'
    ]

    const handleSubmit = event => {
        event.preventDefault();
        const nextSectionIndex = sectionOrder.indexOf(section);
        setSection(sectionOrder[nextSectionIndex+1]);   
      };


    return (
        <>
        <section>
            {section !== 'summary' ? (
                <form onSubmit={handleSubmit}>
                    {section === 'welcome' && (
                        <Welcome />
                    )}
                    {section === 'question1' && (
                        <CharacterTextfield name={name} setName={setName}/>
                    )}
                    {section === 'question2' && (
                        <NumberOfSeasonsRadio numberOfSeasons={numberOfSeasons} setNumberOfSeasons={setNumberOfSeasons} />
                    )}
                    {section === 'question3' && (
                        <HousesSelect gameOfThronesHouse={gameOfThronesHouse} setGameOfThronesHouse={setGameOfThronesHouse} />
                    )}
                    {section === 'question4' && (
                        <RateEndingRadio rateEnding={rateEnding} setRateEnding={setRateEnding} />
                    )}
                    <button 
                        type='submit'
                        > Next!
                    </button> 
                </form>
                ):(
                    <Summary name={name} numberOfSeasons={numberOfSeasons} gameOfThronesHouse={gameOfThronesHouse} rateEnding={rateEnding}/>
                )}
        </section>
        </>

    )
}

export default Survey;