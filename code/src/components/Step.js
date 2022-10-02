import React from 'react';
import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti();

export const Step = ({ step, setStep, color, size }) => {
  console.log('BEFORE', { color }, { size });
  const colorConfetti = JSON.stringify(color).slice(1, 8);
  const sizeConfetti = JSON.stringify(size).replace(/['"]+/g, '');
  console.log('AFTER', colorConfetti, sizeConfetti);

  return (
    <>
      {step > 1 && (<button type="button" className="previousBtn" onClick={() => setStep(step - 1)}>🡄</button>
      )}
      {step < 4 && (<button type="button" className="nextBtn" onClick={() => setStep(step + 1)}>🡆</button>
      )}
      {step === 4 && (<button type="submit" className="submitBtn" onClick={() => { (setStep(step + 1)); (jsConfetti.addConfetti({ confettiRadius: sizeConfetti, confettiNumber: 400, confettiColors: [colorConfetti] })); }}>Submit</button>)}
    </>
  );
};