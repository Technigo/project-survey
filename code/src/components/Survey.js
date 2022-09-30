import React, { useState } from 'react';

/* import UserName from 'components/UserName'; */
import FirstPage from 'components/FirstPage';
import UserFeelings from 'components/UserFeelings';
import UserTeam from 'components/UserTeam';
import UserAnswers from './UserAnswers';
import UserConfirm from './UserConfirm';
import UserInput from './UserInput';
/* import UserTeamMate from 'components/UserTeam'; */
import UserAloneOrBuddy from './UserAloneOrBuddy';

const Survey = () => {
  const [counter, setCounter] = useState(0);
  const [userName, setUserName] = useState('');
  const [userFeelings, setUserFeelings] = useState('');
  const [userTeam, setUserTeam] = useState('');
  const [userBuddy, setUserBuddy] = useState('');
  const [userAloneOrBuddy, setUserAloneOrBuddy] = useState('');

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
    setCounter(7)
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
          <UserInput
            userInput={userName}
            setUserInput={setUserName}
            headerText="First things first..."
            subHeaderText="What&apos;s your name?"
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
            userTeam={userTeam}
          />
        </div>
      )}

      {/* {counter === 4 && (
        <div className="survey-info">
          <userTeamMate
            userTeamMate={userTeamMate}
            setUserTeamMate={setUserTeamMate}
            userName={userName}
          />
        </div>
      )} */}

      {counter === 4 && (
        <div className="survey-info">
          <UserAloneOrBuddy
            userAloneOrBuddy={userAloneOrBuddy}
            setUserAloneOrBuddy={setUserAloneOrBuddy}
            userName={userName}
          />
        </div>
      )}

      {(counter === 5 && userAloneOrBuddy === 'Alone') && (
        <div className="survey-info">
          <UserInput
            userInput={userBuddy}
            setUserInput={setUserBuddy}
            headerText="Free solo! But remember: &quot;you never walk alone&quot; "
            subHeaderText="Who was your code pair?"
          />
        </div>
      )}

      {(counter === 5 && userAloneOrBuddy === 'Pair') && (
        <div className="survey-info">
          <UserInput
            userInput={userBuddy}
            setUserInput={setUserBuddy}
            headerText="The power of 2 minds!"
            subHeaderText="Who was your code pair?"
          />
        </div>
      )}

      {counter === 6 && (
        <div className="survey-info">
          <UserConfirm />
        </div>
      )}

      {counter === 7 && (
        <>
          <div>
            <UserAnswers
              userName={userName}
              userTeam={userTeam}
              userFeelings={userFeelings}
              userBuddy={userBuddy}
              userAloneOrBuddy={userAloneOrBuddy}
            />
          </div>
          <div className="btn-container">
            <button className="btn restart" type="button" onClick={handleRestartButtonClick}>Restart</button>
          </div>
        </>
      )}

      {(counter >= 1 && counter <= 5) && (
        <div className="btn-container">
          <button className="btn back" type="button" onClick={() => handleCounterButtonClick(false)}> Back</button>
          <button className="btn next" type="button" onClick={() => handleCounterButtonClick(true)}> Next</button>
        </div>
      )}

      {counter === 6 && (
        <div className="btn-container">
          <button className="btn back" type="button" onClick={() => handleCounterButtonClick(false)}> Back</button>
          <button className="btn submit" type="submit" onClick={handleSubmitButtonClick}>Submit</button>
          <button className="btn restart" type="button" onClick={handleRestartButtonClick}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default Survey