/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import submitScreen from 'components/SubmitScreen';
import NextButton from 'components/Button';
import PreviousButton from 'components/PreviousButton';
import RightBox from 'components/RightBox';
import SubmitButton from 'components/SubmitButton';
import Question0 from 'components/Page0'

const checkboxType = [
  'a replacement fox',
  'donate to the foxes-families® "charity" center',
  'monetary reimbursement'
]

const checkboxScore = [
  '1',
  '2',
  '3',
  '4',
  '5'
]

export const App = () => {
  /* const [exampleVariable, setExampleVariable] = useState('initial_value'); */
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [foxtype, setFoxtype] = useState('');
  const [payment, setPayment] = useState('');
  const [yesNews, setYesNews] = useState(false);
  const [satisfaction, setSatisfaction] = useState('5');

  return (
    <div className="parent-container">
      {counter === 0 && (<Question0 counter={counter} setCounter={setCounter} />)}
      {counter === 1 && (
        <div className="leftbox">
          <div className="leftboxChild">
            <p>What is your name?</p>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            <NextButton counter={counter} setCounter={setCounter} />
          </div>
        </div>)}
      {counter === 2 && (
        <div className="leftbox">
          <div className="leftboxChild">
            <select
              className="selectFox"
              value={foxtype}
              onChange={(event) => setFoxtype(event.target.value)}>
              <option value="" defaultValue disabled>Your purchase</option>
              <option value="redfox">Vulpes vulpes, red fox</option>
              <option value="capefox">Vulpes chama, Cape fox</option>
              <option value="fennecfox">Vulpes zerda, Fennec fox</option>
            </select>
            <div className="button-container">
              <NextButton counter={counter} setCounter={setCounter} />
              <PreviousButton counter={counter} setCounter={setCounter} />
            </div>
          </div>
        </div>
      )}
      {counter === 3 && (
        <div className="leftbox">
          <div className="leftboxChild">
            <p>When did you make your purchase?</p>
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)} />
            <div className="button-container">
              <NextButton counter={counter} setCounter={setCounter} />
              <PreviousButton counter={counter} setCounter={setCounter} />
            </div>
          </div>
        </div>
      )}
      {counter === 4 && (
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
      )}
      {counter === 5 && (
        <div className="leftbox">
          <div className="leftboxChild">
            <p>Would you like to opt for targeted discounts and special offers in the future?</p>
            <input
              type="checkbox"
              checked={yesNews}
              onChange={(event) => setYesNews(event.target.checked)} />
            <div className="button-container">
              <NextButton counter={counter} setCounter={setCounter} />
              <PreviousButton counter={counter} setCounter={setCounter} />
            </div>
          </div>
        </div>
      )}
      {counter === 6 && (
        <div className="leftbox">
          <div className="leftboxChild">
            <form>
            How likely are you to recommend Fox-in-a-box™,
            1 being the lowest probability and 5 being the highest?
              {checkboxScore.map((choice) => (
                <label key={choice}>
                  <input
                    type="radio"
                    value={choice}
                    onChange={(event) => setSatisfaction(event.target.value)}
                    checked={satisfaction === choice} />
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
      )} {counter === 7 && (
        <div className="leftbox">
          <div className="leftboxChild">
            <p>Your name is:</p>
            <h4>{name}</h4>
            <p>Your purchase:</p>
            <h4>{foxtype}</h4>
            <p>Date of purchase:</p>
            <h4>{date}</h4>
            <p>Choice of reimbursement:</p>
            <h4>{payment}</h4>
            <p>Opt in for future deals:</p>
            <h4>{yesNews ? 'Yes' : 'No'}</h4>
            <p>Satisfaction score:</p>
            <h4>{satisfaction}</h4>
            <p>Are these the correct answers?</p>
            <button
              type="button"
              className="submitBtn"
              onClick={submitScreen}>Submit
              <img className="submitBtnImg" src="" alt="forward pointing arrow" />
            </button>
            <div className="button-container">
              <SubmitButton counter={counter} setCounter={setCounter} />
              <PreviousButton counter={counter} setCounter={setCounter} />
            </div>
          </div>
        </div>
      )}
      {counter === 8 && (
        <div className="leftbox">
          <div className="leftboxChild">
            <h1>Thank valued customer, you will hear from us shortly!</h1>
            <p>Your name is:</p>
            <h4>{name}</h4>
            <p>Your purchase:</p>
            <h4>{foxtype}</h4>
            <p>Date of purchase:</p>
            <h4>{date}</h4>
            <p>Choice of reimbursement:</p>
            <h4>{payment}</h4>
            <p>Opt in for future deals:</p>
            <h4>{yesNews ? 'Yes' : 'No'}</h4>
            <p>Satisfaction score:</p>
            <h4>{satisfaction}</h4>
          </div>
        </div>
      )}
      <RightBox />
    </div>
  );
}
