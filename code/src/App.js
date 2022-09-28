import React, { useState } from 'react';
import UserName from 'components/UserName';
import UserLastname from 'components/UserLastname';
import UserMail from 'components/UserMail';

export const App = () => {
  const [counter, setCounter] = useState(1);
  const [Name, setName] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Mail, setMail] = useState('');

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
  };

  return (
    <form>
      <div>
        <div className="newsletter">
          <h1>Join our newsletter</h1>
          <p>Get early access to new products & exclusive promos! </p>
          <p>Do not miss your chance! Only for members of our newsletter!</p>
        </div>

        <div className="questionsCounter">
      Question number {counter}
          <div className="questionsButtons">
            <button type="button" onClick={() => handleCounterButtonClick(false)}>
        Previous question
            </button>
            <button type="button" onClick={() => handleCounterButtonClick(true)}>
        Next question
            </button>
          </div>
        </div>

        {counter === 1 && (
          <div>
            <UserName name={Name} setName={setName} />
            <p>Questions answered: {counter}/7 </p>
          </div>
        )}

        {counter === 2 && (
          <div>
            <UserLastname lastname={Lastname} setLastname={setLastname} />
            <p>Questions answered: {counter}/7 </p>
          </div>
        )}

        {counter === 3 && (
          <div>
            <UserMail mail={Mail} setMail={setMail} />
            <p>Questions answered: {counter}/7 </p>
          </div>
        )}

        {counter === 4 && (
          <div>
            <Lastname lastname={Lastname} setLastname={setLastname} />
            <p>Questions answered: {counter}/7 </p>
          </div>
        )}

        {counter === 5 && (
          <div>
            <Lastname lastname={Lastname} setLastname={setLastname} />
            <p>Questions answered: {counter}/7 </p>
          </div>
        )}

        {counter === 6 && (
          <div>
            <Lastname lastname={Lastname} setLastname={setLastname} />
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
            <p>Summary of you answers:</p>
            <p>Name: {Name} </p>
            <p>Lastname: {Lastname} </p>
            <p>E-mail: {Mail} </p>
            <p>Questions answered: {counter}/7 </p>
            <button type="submit" onSubmit value="Send">Send</button>
          </div>
        )}

      </div>
    </form>

  );
};
