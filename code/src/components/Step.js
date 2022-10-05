import React from 'react';
import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti();

export const Step = ({ step, setStep, color, size }) => {
  // redefines the props color and size to fit the confetti function. Deleting ""
  const colorConfetti = JSON.stringify(color).slice(1, 8);
  const sizeConfetti = JSON.stringify(size).replace(/['"]+/g, '');

  return (
    <>
      {step > 1 && (<button type="button" aria-label="Previous question" className="previousBtn" onClick={() => setStep(step - 1)}>🡄</button>
      )}
      {step < 4 && (<button type="button" aria-label="Next question" className="nextBtn" onClick={() => setStep(step + 1)}>🡆</button>
      )}
      {step === 4 && (<button type="submit" aria-label="Submit" className="submitBtn" onClick={() => { (setStep(step + 1)); (jsConfetti.addConfetti({ confettiRadius: sizeConfetti, confettiNumber: 400, confettiColors: [colorConfetti] })); }}>Submit</button>)}
    </>
  );
};