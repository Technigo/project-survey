/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import NextButton from './Button';
import PreviousButton from './PreviousButton'

const Page4 = ({ counter, setCounter, payment, setPayment }) => {
  const checkboxType = [
    'a replacement fox',
    'donate to the foxes-families® help center',
    'monetary reimbursement'
  ]
  return (
    <div className="leftbox">
      <div className="leftboxChild">
        <p>In what manner would you like to be reimbursed?</p>
        <form>
              Choice of reimbursement:
          {checkboxType.map((choice) => (
            <label key={choice}>
              <input
                type="radio"
                value={choice}
                onChange={(event) => setPayment(event.target.value)}
                checked={payment === choice} />
              {choice}
            </label>
          ))}
        </form>
        <div className="button-container">
          <NextButton counter={counter} setCounter={setCounter} />
          <PreviousButton counter={counter} setCounter={setCounter} />
        </div>
      </div>
    </div>

  )
}

export default Page4;