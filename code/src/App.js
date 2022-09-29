import React, { useState } from 'react';
import UserName from 'components/UserName';
import UserLastname from 'components/UserLastname';
import UserMail from 'components/UserMail';
import UserLocation from 'components/UserLocation';
import UserAge from 'components/UserAge';
import Frequency from 'components/Frequency';

export const App = () => {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [mail, setMail] = useState('');
  const [location, setLocation] = useState('');
  const [age, setAge] = useState('');
  const [frequency, setFrequency] = useState();

  const handleCounterButtonClick = (shouldIncrease) => {
    if (shouldIncrease && counter < 7) {
      setCounter(counter + 1);
    } else if (!shouldIncrease && counter > 1) {
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
      <div>
        <div className="newsletter">
          <h1>Join our ⭐ newsletter</h1>
          <p>Get early access to new products & exclusive promos! </p>
          <p>Do not miss your chance! Only for members of our newsletter!</p>
        </div>

        <div className="questionsCounter">
        Question number {counter}
          <div className="questionsButtons">
            <button type="button" aria-label="Click to see previous question" onClick={() => handleCounterButtonClick(false)}>
        Previous question
            </button>
            <button type="button" aria-label="Click to see next question" onClick={() => handleCounterButtonClick(true)}>
        Next question
            </button>
          </div>
        </div>

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

        <p>
          <button type="button" onClick={handleClearButtonClick}>
          clear input
          </button>
        </p>

        {counter === 7 && (
          <div>
            <p>Survey completed!</p>
            <p>Questions answered: {counter}/7 </p>
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
      </div>
    </form>

  );
};
