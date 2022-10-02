import React, { useState } from 'react';
import './button.css'

import { StartSurvey } from './components/StartSurvey';
import { Survey } from './components/Survey';
import { Summary } from './components/Summary';

export const App = () => {
  const [section, setSection] = useState(0);
  const [startDay, setStartDay] = useState('');
  const [relationships, setRelationships] = useState('');
  const [whatKinde, setWhatKinde] = useState('select below');
  const [feeling, setFeeling] = useState('');

  return (
    <main className="main">
      <StartSurvey
        setSection={setSection}
        section={section} />

      <Survey
        setStartDay={setStartDay}
        startDay={startDay}
        setRelationships={setRelationships}
        relationships={relationships}
        setWhatKinde={setWhatKinde}
        whatKinde={whatKinde}
        setFeeling={setFeeling}
        feeling={feeling}
        setSection={setSection}
        section={section} />

      <Summary
        setSection={setSection}
        section={section}
        startDay={startDay}
        relationships={relationships}
        whatKinde={whatKinde}
        feeling={feeling} />
    </main>
  )
}
