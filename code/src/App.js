import React, { useState } from 'react';

export const App = () => {
  const [step, setStep] = useState(1)
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
         Find me in src/app.js!
      </div>
    </div>
  );
}
