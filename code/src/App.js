import React, { useState } from 'react';
import FirstPage from 'components/FirstPage';
import UserName from 'components/UserName';
import UserLastname from 'components/UserLastname';
import UserMail from 'components/UserMail';
import UserLocation from 'components/UserLocation';
import UserAge from 'components/UserAge';
import Frequency from 'components/Frequency';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [mail, setMail] = useState('');
  const [location, setLocation] = useState('');
  const [age, setAge] = useState('');
  const [frequency, setFrequency] = useState();

  const handleCounterButtonClick = (shouldIncrease) => {
    if (shouldIncrease && counter < 7) {
      setCounter(counter + 1);
    } else if (!shouldIncrease && counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleClearButtonClick = () => {
    setName('');
    setLastname('');
    setMail('');
    setLocation('');
    setAge('');
    setFrequency('');
  };

  return (
    <form/*  onSubmit={(event) => event.preventDefault()} */>

      

      {counter === 0 && (
        <>
          <FirstPage />
          <button type="button" aria-label="Subscribe me for this newsletter" onClick={() => handleCounterButtonClick(true)}>
          Sign me up!
          </button>
        </>
      )}

      {counter === 1 && (
        <div>
          <UserName username={name} setUsername={setName} />
          <p>Questions answered: {counter}/7 </p>
        </div>
      )}

      {counter === 2 && (
        <div>
          <UserLastname userlastname={lastname} setUserlastname={setLastname} username={name} />
          <p>Questions answered: {counter}/7 </p>
        </div>
      )}

      {counter === 3 && (
        <div>
          <UserMail usermail={mail} setUsermail={setMail} />
          <p>Questions answered: {counter}/7 </p>
        </div>
      )}

      {counter === 4 && (
        <div>
          <UserLocation userlocation={location} setUserlocation={setLocation} />
          <p>Questions answered: {counter}/7 </p>
        </div>
      )}

      {counter === 5 && (
        <div>
          <UserAge userage={age} setUserage={setAge} />
          <p>Questions answered: {counter}/7 </p>
        </div>
      )}

      {counter === 6 && (
        <div>
          <Frequency userfrequency={frequency} setUserfrequency={setFrequency} />
          <p>Questions answered: {counter}/7 </p>
        </div>
      )}

      {counter < 8 && counter > 1 && (
        <button type="button" aria-label="Click to see previous question" onClick={() => handleCounterButtonClick(false)}>
        Previous question
        </button>
      )}

      {counter < 7 && counter > 0 && (
        <button type="button" aria-label="Click to see next question" onClick={() => handleCounterButtonClick(true)}>
        Next question
        </button>
      )}

      {counter < 7 && counter > 0 && (
        <p>
          <button type="button" aria-label="clear button" onClick={handleClearButtonClick}>
          Clear input
          </button>
        </p>
      )}

      {counter === 7 && (
        <div>
          <p>Survey completed!</p>
          <p>Summary of you answers:</p>
          <p>Name: {name} </p>
          <p>Lastname: {lastname} </p>
          <p>E-mail: {mail} </p>
          <p>Physical shop location: {location} </p>
          <p>Age group: {age} </p>
          <p>Frequency for newsletter: {frequency}</p>
          <button aria-label="Submit answers" type="submit" onSubmit value="Send">Send</button>
        </div>
      )}
    </form>
  );
};
