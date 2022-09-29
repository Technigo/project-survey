import React, { useState } from 'react';
/* import backImage from 'assets/background.jpg' */

import UserName from 'components/UserName';
import FirstPage from 'components/FirstPage';
import UserFeelings from 'components/UserFeelings';
import UserTeam from 'components/UserTeam';
import UserAnswers from './UserAnswers';
import UserConfirm from './UserConfirm';

const Survey = () => {
  const [counter, setCounter] = useState(0);
  const [userName, setUserName] = useState('');
  const [userFeelings, setUserFeelings] = useState('');
  const [userTeam, setUserTeam] = useState('');

  /* This creates a counter. We use it to navigate into the survey and display the questions */
  const handleCounterButtonClick = (shouldIncrease) => {
    if (shouldIncrease && counter < 10) {
      setCounter(counter + 1)
    } else if (!shouldIncrease && counter > 0) {
      setCounter(counter - 1)
    }
  }
  /* This will reset the survey */
  const handleRestartButtonClick = () => {
    setUserName('')
    setUserFeelings('')
    setUserTeam('')
    setCounter(0)
  }

  const handleSubmitButtonClick = () => {
    console.log('You clicked submit')
    setCounter(5)
  }
  /*  The survey starts here */
  return (
    <div className="survey-card">
      {counter === 0 && (
        <>
          <div className="survey-info">
            <FirstPage />
          </div>
          <button className="btn start" type="button" onClick={() => handleCounterButtonClick(true)}> START</button>
        </>
      )}

      {counter === 1 && (
        <div className="survey-info">
          <UserName
            userName={userName}
            setUserName={setUserName}
          />
        </div>
      )}

      {counter === 2 && (
        <div className="survey-info">
          <UserTeam
            userTeam={userTeam}
            setUserTeam={setUserTeam}
            userName={userName}
          />
        </div>
      )}

      {counter === 3 && (
        <div className="survey-info">
          <UserFeelings
            userFeelings={userFeelings}
            setFeelings={setUserFeelings}
            userName={userName}
          />
        </div>
      )}

      {counter === 4 && (
        <div className="survey-info">
          <UserConfirm />
        </div>
      )}

      {counter === 5 && (
        <>
          <div>
            <UserAnswers
              userName={userName}
              userTeam={userTeam}
              userFeelings={userFeelings}
            />
          </div>
          <div className="btn-container">
            <button className="btn restart" type="button" onClick={handleRestartButtonClick}>Restart</button>
          </div>
        </>
      )}

      {(counter >= 1 && counter <= 3) && (
        <div className="btn-container">
          <button className="btn back" type="button" onClick={() => handleCounterButtonClick(false)}> Back</button>
          <button className="btn next" type="button" onClick={() => handleCounterButtonClick(true)}> Next</button>
        </div>
      )}

      {counter === 4 && (
        <div className="btn-container">
          <button className="btn back" type="button" onClick={() => handleCounterButtonClick(false)}> Back</button>
          <input className="btn submit" type="submit" onClick={handleSubmitButtonClick} />
          <button className="btn restart" type="button" onClick={handleRestartButtonClick}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default Survey