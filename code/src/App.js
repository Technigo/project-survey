/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useState } from 'react';
import FirstPage from 'components/FirstPage';
import UserName from 'components/UserName';
import UserLastname from 'components/UserLastname';
import UserMail from 'components/UserMail';
import UserPhoneNumber from 'components/UserPhoneNumber';
import UserLocation from 'components/UserLocation';
import UserAge from 'components/UserAge';
import Frequency from 'components/Frequency';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [age, setAge] = useState('');
  const [frequency, setFrequency] = useState();

  const handleCounterButtonClick = (shouldIncrease) => {
    if (shouldIncrease && counter < 8) {
      setCounter(counter + 1);
    } else if (!shouldIncrease && counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleClearButtonClick = () => {
    setName('');
    setLastname('');
    setMail('');
    setPhone('');
    setFrequency('');
    setLocation('');
    setAge('');
  };

  return (
    <form/*  onSubmit={(event) => event.preventDefault()} */>

      {counter === 0 && (
        <div className="first-page">
          <FirstPage />
          <button type="button" className="subscribe-button" aria-label="Subscribe me for this newsletter" onClick={() => handleCounterButtonClick(true)}>
          Sign me up!
          </button>
        </div>
      )}
      <div className="body-section">
        {counter === 1 && (
          <>
            <div className="question-section"><UserName username={name} setUsername={setName} /></div>
            <div className="questions-answered" tabIndex="0">Questions: {counter}/7 </div>
          </>
        )}

        {counter === 2 && (
          <>
            <div className="question-section"><UserLastname userlastname={lastname} setUserlastname={setLastname} username={name} /></div>
            <div className="questions-answered" tabIndex="0">Questions: {counter}/7 </div>
          </>
        )}

        {counter === 3 && (
          <>
            <div className="question-section"><UserMail usermail={mail} setUsermail={setMail} /></div>
            <div className="questions-answered" tabIndex="0">Questions: {counter}/7 </div>
          </>
        )}

        {counter === 4 && (
          <>
            <div className="question-section"><UserPhoneNumber userphonenumber={phone} setUserphonenumber={setPhone} /></div>
            <div className="questions-answered" tabIndex="0">Questions: {counter}/7 </div>
          </>
        )}

        {counter === 5 && (
          <>
            <div className="question-section"><UserLocation userlocation={location} setUserlocation={setLocation} /></div>
            <div className="questions-answered" tabIndex="0">Questions: {counter}/7 </div>
          </>
        )}

        {counter === 6 && (
          <>
            <div className="question-section"><UserAge userage={age} setUserage={setAge} /></div>
            <div className="questions-answered" tabIndex="0">Questions: {counter}/7 </div>
          </>
        )}

        {counter === 7 && (
          <>
            <div className="question-section"><Frequency userfrequency={frequency} setUserfrequency={setFrequency} /></div>
            <div className="questions-answered" tabIndex="0">Questions: {counter}/7 </div>
          </>
        )}

        {counter === 8 && (
          <>
            <div className="question-section">
              <h1 tabIndex="0">Survey completed!</h1>
              <p tabIndex="0">Summary of you answers:</p>
              <ol>
                <li tabIndex="0">Name: {name} </li>
                <li tabIndex="0">Lastname: {lastname} </li>
                <li tabIndex="0">E-mail: {mail} </li>
                <li tabIndex="0">Phone number: {phone} </li>
                <li tabIndex="0">Physical shop location: {location} </li>
                <li tabIndex="0">Age group: {age} </li>
                <li tabIndex="0">Frequency for newsletter: {frequency}</li>
              </ol>
            </div>
            <button className="submit-button" aria-label="Submit answers" type="submit" onSubmit value="Send">Send</button>
          </>
        )}

        {counter < 8 && counter > 0 && (
          <button type="button" className="ok-button" aria-label="Click to see next question" onClick={() => handleCounterButtonClick(true)}>
            <h3>OK ✔</h3>
          </button>
        )}

        {counter < 8 && counter > 1 && (
          <button type="button" className="previous-button" aria-label="Click to see previous question" onClick={() => handleCounterButtonClick(false)}>
        ◀
          </button>
        )}

        {counter < 8 && counter > 0 && (
          <button type="button" className="next-button" aria-label="Click to see next question" onClick={() => handleCounterButtonClick(true)}>
            ▶
          </button>
        )}

        {counter < 8 && counter > 0 && (
          <button type="button" className="clear-button" aria-label="clear button" onClick={handleClearButtonClick}>
          Clear
          </button>
        )}
      </div>
    </form>
  );
};
