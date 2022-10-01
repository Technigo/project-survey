import { StartDay } from 'components/StartDay';
import React, { useState } from 'react';

import { StartSurvey } from './components/StartSurvey';
import { Survey } from './components/Survey';
import { Summary } from './components/Summary';

export const App = () => {
  const [section, setSection] = useState(0);
  const [startDay, setStartDay] = useState('');
  const [relationship, setRelationship] = useState('');
  const [whatKinde, setWhatKinde] = useState('');
  const [feeling, setFeeling] = useState('');

  return (
    <main className="main">
      <>
        <StartSurvey setSection={setSection} section={section} />

        <Survey startDay={startDay} setStartDay={setStartDay} />

        <Summary
          startDay={startDay}
          relationship={relationship}
          whatKinde={whatKinde}
          feeling={feeling}
        />
      </>
    </main>
  );
};
