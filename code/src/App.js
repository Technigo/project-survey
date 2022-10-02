import React, { useState } from 'react';
import Start from 'components/Start/Start';
import Questions from 'components/Questions/Questions';
import End from 'components/End/End';
import sound from './lib/sound.mp3';

const App = () => {
  const [page, setPage] = useState('start');
  const [name, setName] = useState('');
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');

  const playSound = () => {
    const audio = new Audio(sound);
    audio.volume = 0.1;
    audio.play();
  };

  return (
    <div className="main">
      {page === 'start' && (
        <Start
          nextPage={() => {
            setPage('questions');
            playSound();
          }}
          setName={setName}
          name={name}
        />
      )}
      {page === 'questions' && (
        <Questions
          nextPage={() => setPage('end')}
          question1={question1}
          setQuestion1={setQuestion1}
          question2={question2}
          setQuestion2={setQuestion2}
          question3={question3}
          setQuestion3={setQuestion3}
        />
      )}
      {page === 'end' && (
        <End
          nextPage={() => setPage('start')}
          name={name}
          question1={question1}
          question2={question2}
          question3={question3}
        />
      )}
    </div>
  );
};

export default App;
