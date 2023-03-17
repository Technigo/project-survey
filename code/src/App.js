import React, { useState } from 'react';
import Purchase from './components/Purchase';
import Start from './components/Start';
import Subscription from './components/Subscription';
import FreeText from './components/FreeText';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';

export const App = () => {
  const [step, setStep] = useState(1)
  const [purchase, setPurchase] = useState('')
  const [subscriptionQ, setSubscriptionQ] = useState('')
  const [often, setOften] = useState('')
  const [missing, setMissing] = useState('')

  const handleStepIncrease = () => {
    setStep(step + 1)
  }

  const handleStepDecrease = () => {
    setStep(step - 1)
  }

  const handleStepRestart = () => {
    setStep(1)
  }

  return (
    <>
      <div className="outer-part">
        <div className="inner-part">
          {step === 1 && (
            <div>
              <Start />
              <button className="start-btn" type="button" onClick={handleStepIncrease}>Start here</button>
            </div>
          )}

          {step === 2 && (
            <Subscription subscriptionQ={subscriptionQ} setSubscriptionQ={setSubscriptionQ} />
          )}

          {step === 3 && (
            <Purchase purchase={purchase} setPurchase={setPurchase} />
          )}

          {step === 4 && (
            <div>
              <FreeText
                headline="Favorite purchases"
                input={often}
                setInput={setOften}
                inputLabel="Which drink do you purchase most often when at a cafe?"
                id="favorite-purchase"
                placeholder="My favorite purchase is..."
                htmlFor="favorite-purchase" />
            </div>
          )}

          {step === 5 && (
            <div>
              <FreeText
                headline="Something missing?"
                input={missing}
                setInput={setMissing}
                inputLabel="Is there a drink you feel is missing at most cafes?"
                id="missing-drink"
                placeholder="I would love if all cafes offered..."
                htmlFor="missing-drink" />
            </div>
          )}

          {step === 6 && (
            <div>
              <Conclusion
                subscriptionQ={subscriptionQ}
                purchase={purchase}
                often={often}
                missing={missing} />
            </div>
          )}

          {step < 6 && step > 1 && (
            <div>
              <button className="next-btn" type="button" onClick={handleStepIncrease}>Submit answer</button>
            </div>
          )}

          {step > 2 && step < 6 && (
            <div>
              <button className="prev-btn" type="button" onClick={handleStepDecrease}>Previous question</button>
            </div>
          )}

          {step <= 6 && (
            <div>
              <button className="restart-btn" type="button" onClick={handleStepRestart}>Restart</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
