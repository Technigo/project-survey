import React, { useState } from 'react';
import Start from 'components/Start/Start'
import Questions from 'components/Questions/Questions'
import End from 'components/End/End'

const App = () => {
  const [surveyMode, setSurveyMode] = useState('start')
  const [hunger, setHungerLevel] = useState('')

  return (
    <div>
      {surveyMode === 'start' && <Start nextPage={() => setSurveyMode('questions')} setHungerLevel={setHungerLevel} hunger={hunger} />}
      {surveyMode === 'questions' && <Questions nextPage={() => setSurveyMode('end')} />}
      {surveyMode === 'end' && <End nextPage={() => setSurveyMode('start')} />}
    </div>
  );
}

export default App;