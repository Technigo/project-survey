import React, { useState } from 'react';
import Start from 'components/Start/Start'
import Questions from 'components/Questions/Questions'
import End from 'components/End/End'

const App = () => {
  const [surveyMode, setSurveyMode] = useState('start')
  const [hunger, hungerLevel] = useState('')

  return (
    <div className="App">
      {surveyMode === 'start' && <Start nextPage={() => setSurveyMode('questions')} hungerLevel={hungerLevel} hunger={hunger} />}
      {surveyMode === 'questions' && <Questions nextPage={() => setSurveyMode('end')} />}
      {surveyMode === 'end' && <End nextPage={() => setSurveyMode('start')} />}
    </div>
  );
}

export default App;