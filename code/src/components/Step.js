import React from 'react';
import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti();

export const Step = ({ step, setStep }) => {
  return (
    <>
      {step > 1 && (<button type="button" className="previousBtn" onClick={() => setStep(step - 1)}>🡄</button>
      )}
      {step < 4 && (<button type="button" className="nextBtn" onClick={() => setStep(step + 1)}>🡆</button>
      )}
      {step === 4 && (<button type="submit" className="submitBtn" onClick={() => { (setStep(step + 1)); (jsConfetti.addConfetti({ confettiRadius: 6, confettiNumber: 500 })); }}>Submit</button>)}
    </>
  );
};
