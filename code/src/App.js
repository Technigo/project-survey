import Question from 'components/Questions/Question';
import { answersQ1, answersQ2, answersQ3, answersQ4 } from 'library/answers';
import FormTextField from 'components/FormTextField';
import FormSelect from 'components/FormSelect';
import React, { useState } from 'react';
import './index.css';

export const App = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [name, setName] = useState('');
  const [question1Answer, setQuestion1Answer] = useState('');
  const [question2Answer, setQuestion2Answer] = useState('');
  const [question3Answer, setQuestion3Answer] = useState('');
  const [question4Answer, setQuestion4Answer] = useState('');
  const nextQuestion = () => {
    setQuestionNo(questionNo + 1);
  };
  // }

  // first question - Radio Buttons //
  // second question - Select field //
  // third question - Freetext field //

  return (
    <form>
      {questionNo === 0 && (
        <div>

          <label>Enter your name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </label>
          <button
            type="button"
            disabled={name === ''}
            onClick={nextQuestion}>
            Next
          </button>
        </div>
      )}
      {questionNo === 1 && (<Question
        question={{ header: 'Question 1', text: 'Which tech entrepreneur named his son X Æ A-12?' }}
        questionNo={questionNo}
        setQuestionNo={setQuestionNo}
        answers={answersQ1} />)}

      {questionNo === 2 && (<Question
        question={{ header: 'Question 2', text: 'Johhny Depp is famously afraid of what?' }}
        questionNo={questionNo}
        setQuestionNo={setQuestionNo}
        answers={answersQ2} />)}

      {questionNo === 3 && (<Question
        question={{ header: 'Question 3', text: 'Which pop star is the godmother of both of Elton John´s sons?' }}
        questionNo={questionNo}
        setQuestionNo={setQuestionNo}
        answers={answersQ3} />)}

      {questionNo === 4 && (<Question
        question={{ header: 'Question 4', text: 'What did you hate sharing as a kid?' }}
        questionNo={questionNo}
        setQuestionNo={setQuestionNo}
        answers={answersQ4} />)}

      {questionNo >= 5 && (<h1>The end</h1>)}

      {false && (
        <>
          {/* <FormSelect /> */}
          <FormTextField />
        </>
      )}

    </form>
  );
}

export default App;