import React from 'react';
import Confetti from './Confetti';

export const Step = ({ step, setStep }) => {
  return (
    <>
      {step > 1 && (<button type="button" className="previousBtn" onClick={() => setStep(step - 1)}>🡄</button>
      )}
      {step < 4 && (<button type="button" className="nextBtn" onClick={() => setStep(step + 1)}>🡆</button>
      )}
      {step === 4 && (<button type="submit" className="submitBtn" onClick={() => (setStep(step + 1))(<Confetti />)}>Submit</button>
      )}
    </>
  );
};