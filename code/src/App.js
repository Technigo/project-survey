/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import StartSurvey from 'components/Start/StartSurvey';
import Question from 'components/Questions/Question';
import SubmitScreen from 'components/SubmitScreen';
import NameInput from 'components/Start/NameInput';
import ProgressCounter from 'components/ProgressCounter';
import EndSurvey from './.components/EndSurvey/EndSurvey';
import './index.css';

// import { answersQ1, answersQ2, answersQ3, answersQ4 } from 'library/answers';
// import FormTextField from 'components/FormTextField';
// import FormSelect from 'components/FormSelect';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [page, setPage] = useState('start');
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [question4, setQuestion4] = useState('');
  // const nextQuestion = () => {
  //   setQuestionNo(questionNo + 1);
  // };

  // first question - Radio Buttons //
  // second question - Select field //
  // third question - Freetext field //

  return (
    <div className="main">
      {page === 'start' && (
        <StartSurvey
          nextPage={() => {
            setPage('questions');
          }}
          setName={setName}
          name={name} />
      )}
      {page === 'questions' && (
        <Question
          nextPage={() => setPage('end')}
          question1={question1}
          setQuestion1={question1}
          question2={question2}
          setQuestion2={question2}
          question3={question3}
          setQuestion3={question3}
          question4={question4}
          setQuestion4={question4} />
      )}
      {page === 'end' && (
        <EndSurvey
          nextPage={() => setPage('start')}
          name={name}
          question1={question1}
          question2={question2}
          question3={question3}
          question4={question4} />
      )}
    </div>
  );
};

export default App;