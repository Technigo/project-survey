import Question from 'components/Question';
import FormRadioButton from 'components/FormRadioButton';
import FormTextField from 'components/FormTextField';
import FormSelect from 'components/FormSelect';
import React, { useState } from 'react';
import './index.css';

export const App = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [favoriteAnimal, setFavoriteAnimal] = useState('');
  const [name, setName] = useState('');

  // }

  // first question - Radio Buttons //
  // second question - Select field //
  // third question - Freetext field //

  return (
    <>
      <form>
        <label>Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </label>
        {questionNo === 0 && (<Question
          question={{ header: 'Header 1', text: 'question one' }}
          form={<FormRadioButton
            questionNo={questionNo}
            setQuestionNo={setQuestionNo}
            favoriteAnimal={favoriteAnimal} />} />)}
        {questionNo === 1 && (<Question
          question={{ header: 'Header 2', text: 'question two' }}
          questionNo={questionNo}
          setQuestionNo={setQuestionNo} />)}
        {questionNo === 2 && (<Question question={{ header: 'Header 3', text: 'question three' }} questionNo={questionNo} setQuestionNo={setQuestionNo} />)}
        {questionNo >= 3 && (<h1>Slut</h1>)}
      </form>

      {/* <button type="button" onClick={() => /* handleNextClick}>Next question</button> */}
    </>
  );
}

export default App;