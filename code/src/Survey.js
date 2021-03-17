import React, { useState } from 'react';

import Welcome from './components/Welcome';
import Question1 from './components/Question1';
import { Question2 } from './components/Question2.js';
import Question3 from './components/Question3.js';
import { Question4 } from './components/Question4.js';

const Survey = () => {
    const [startSurvey, setStartSurvey] = useState();
    const [name, setName, next] = useState ('');
    const [numberOfSeasons, setNumberOfSeasons, next2] = useState();
    const [gameOfThronesHouse, setGameOfThronesHouse, next3] = useState('');
    const [rateEnding, setRateEnding, submit] = useState();

    return (
        <>
        <Welcome startSurvey={startSurvey} setStartSurvey={setStartSurvey} />
        <Question1 name={name} setName={setName} next={next}/>
        <Question2 numberOfSeasons={numberOfSeasons} setNumberOfSeasons={setNumberOfSeasons} next={next2} />
        <Question3 gameOfThronesHouse={gameOfThronesHouse} setGameOfThronesHouse={setGameOfThronesHouse} next={next3} />
        <Question4 rateEnding={rateEnding} setRateEnding={setRateEnding} submit={submit} />
        </>

    )
}

export default Survey;