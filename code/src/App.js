import React, { useState } from 'react';
import Start from './Components/start'
import Purchase from './Components/purchase'
import Subscription from './Components/subscription'
import FreeText from './Components/FreeText'
import Conclusion from './Components/Conclusion'
import Footer from './Components/footer'

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

  const handleStepReset = () => {
    setStep(1)
  }

  return (
    <div className="outer-part">
      <div className="inner-part">
        {step === 1 && (
          <div>
            <Start />
            <button className="start-btn" type="button" onClick={handleStepIncrease}>Start here</button>
          </div>
          )
        }

        {step === 2 && (
          <Subscription subscriptionQ={subscriptionQ} setSubscriptionQ={setSubscriptionQ} />
          )
        }

        {step === 3 && (
          <Purchase purchase={purchase} setPurchase={setPurchase} />
          )
        }

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
          )
        }

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
          )
        }

        {step === 6 && (
          <div>
            <Conclusion subscriptionQ={subscriptionQ} purchase={purchase} often={often} missing={missing} />
          </div>
          )
        }

         Find me in src/app.js!
      </div>
    
  );
}
