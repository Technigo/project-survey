import React, { useState } from 'react';
import Start from 'components/Start/Start';
import { Questions } from 'components/Questions/Questions';
import End from 'components/End/End';

const App = () => {
  const [surveyMode, setSurveyMode] = useState('start')
  const [question, setQuestion] = useState(1);
  const [selected, setSelected] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('')
  const [meat, setMeat] = useState('');
  const [fish, setFish] = useState('');
  const [selectedSides, setSelectedSides] = useState('');
  const [text, inputText] = useState('');
  const [vegetarian, setVegetarian] = useState('');

  return (
    <div>
      {surveyMode === 'start' && (
        <Start
          nextPage={() => setSurveyMode('questions')} />
      )}
      {surveyMode === 'questions' && (
        <Questions
          question1={question}
          setQuestion1={setQuestion}
          question2={question}
          setQuestion2={setQuestion}
          question3={question}
          setQuestion3={setQuestion}
          nextPage={() => setSurveyMode('end')}
          protein={protein}
          setProtein={setProtein}
          selected={selected}
          setSelected={setSelected}
          carbs={carbs}
          setCarbs={setCarbs}
          meat={meat}
          setMeat={setMeat}
          fish={fish}
          setFish={setFish}
          selectedSides={selectedSides}
          setSelectedSides={setSelectedSides}
          text={text}
          inputText={inputText}
          vegetarian={vegetarian}
          setVegetarian={setVegetarian} />
      )}
      {surveyMode === 'end' && (
        <End
          carbs={carbs}
          fish={fish}
          meat={meat}
          vegetarian={vegetarian}
          protein={protein}
          selected={selected}
          selectedSides={selectedSides}
          text={text} />
      )}
    </div>
  );
}

export default App;