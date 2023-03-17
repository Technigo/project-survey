import Header from 'components/Header';
import ProgressButton from 'components/ProgressButton';
import SweetOrSalty from 'components/SweetOrSalty';
import Question2 from 'components/Question2';
import StartSlider from 'components/StartSlider';
import TestQuestion from 'components/TestQuestion';
import TestQuestion2 from 'components/TestQuestion2';
import React, { useState } from 'react';

export const App = () => {
  const [progress, setProgress] = useState(1);
  const [sweetSalt, setSweetSalt] = useState('');
  const [sliderValue, setSliderValue] = useState(20);
  const [flavorSweet, setFlavorSweet] = useState('')
  const [testValue, setTestValue] = useState('');
  const [testValue2, setTestValue2] = useState('');
  console.log({ progress })
  return (
    <>
      <Header />
      {progress <= 1 && (<h3>Hello</h3>)}
      <StartSlider sliderValue={sliderValue} setSliderValue={setSliderValue} />
      {progress === 1 && <SweetOrSalty sweetSalt={sweetSalt} setSweetSalt={setSweetSalt} />}
      {progress === 2 && <Question2
        sweetSalt={sweetSalt}
        flavorSweet={flavorSweet}
        setFlavorSweet={setFlavorSweet} />}
      {progress === 3 && ((flavorSweet === 'mixed' && <TestQuestion testValue={testValue} setTestValue={setTestValue} />) || (flavorSweet === 'banana' && <TestQuestion2 testValue2={testValue2} setTestValue2={setTestValue2} />))}
      <ProgressButton progress={progress} setProgress={setProgress} />
      {progress > 1 && (<p>You are on step {progress} of the survey. Cool, right?</p>)}
    </>
  );
}
