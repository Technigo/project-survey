import { ProgressButton } from 'components/ProgressButton';
import React, { useState } from 'react';

export const App = () => {
  const [progress, setProgress] = useState(1);
  return (
    <>
      <p>Hello curious!</p>
      {progress <= 1 && (<h3>Hello</h3>)}
      <p>You are on step {progress} of the survey</p>
      <p>Cool, right?</p>
      <ProgressButton progress={progress} setProgress={setProgress} />
    </>
  );
}
