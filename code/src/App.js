import Question from 'components/Question';
import FormRadioButton from 'components/FormRadioButton';
import FormTextField from 'components/FormTextField';
import React, { useState } from 'react';

export const App = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [favoriteIceCream, setFavoriteIceCream] = useState('');
  // const [name, setName] = useState('');

  // setExampleVariable('second value');
  // 1 > 2 && ==0
  // const handleNextClick = () => {
  // console.log('counter before increase, counter');
  // setCounter(1)
  // console.log('counter after increase, counter');
  // }

  return (
    <>
      <form>
        {questionNo === 0 && (<Question
          question={{ header: 'Header 1', text: 'question one' }}
          form={<FormRadioButton
            questionNo={questionNo}
            setQuestionNo={setQuestionNo}
            favoriteIceCream={favoriteIceCream} />} />)}
        {questionNo === 1 && (<Question question={{ header: 'Header 2', text: 'question two' }} questionNo={questionNo} setQuestionNo={setQuestionNo} />)}
        {questionNo === 2 && (<Question question={{ header: 'Header 3', text: 'question three' }} questionNo={questionNo} setQuestionNo={setQuestionNo} />)}
        {questionNo >= 3 && (<h1>Slut</h1>)}
      </form>

      {/* <button type="button" onClick={() => /* handleNextClick}>Next question</button> */}
    </>
  );
}
