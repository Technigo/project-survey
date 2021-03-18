import React, { useState } from 'react';

//Components for the survey
import Welcome from './components/Welcome';
import CharacterTextfield from './components/CharacterTextfield';
import { NumberOfSeasonsRadio } from './components/NumberOfSeasonsRadio.js';
import HousesSelect from './components/HousesSelect.js';
import { RateEndingRadio } from './components/RateEndingRadio.js';

//All the answers from the survey put into summary through props
import Summary from './components/Summary.js';

//All useState gathered here and connected to child components through props
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
        <section className="form-container">
            {section !== 'summary' && (
                <form onSubmit={handleSubmit}>
                    {section === 'welcome' && (
                        <Welcome handleSubmit={handleSubmit}/>
                    )}
                    {section === 'question1' && (
                        <CharacterTextfield name={name} setName={setName} handleSubmit={handleSubmit}/>
                    )}
                    {section === 'question2' && (
                        <NumberOfSeasonsRadio numberOfSeasons={numberOfSeasons} setNumberOfSeasons={setNumberOfSeasons} handleSubmit={handleSubmit} />
                    )}
                    {section === 'question3' && (
                        <HousesSelect gameOfThronesHouse={gameOfThronesHouse} setGameOfThronesHouse={setGameOfThronesHouse} handleSubmit={handleSubmit} />
                    )}
                    {section === 'question4' && (
                        <RateEndingRadio rateEnding={rateEnding} setRateEnding={setRateEnding} handleSubmit={handleSubmit} />
                    )}
                </form>
                )}
            {section === 'summary' && (
                <Summary name={name} numberOfSeasons={numberOfSeasons} gameOfThronesHouse={gameOfThronesHouse} rateEnding={rateEnding}/>
            )}
        </section>
        </>
    )
}

export default Survey;