import React, { useState } from 'react';

import UserName from 'components/UserName';
import FirstPage from 'components/FirstPage';
import UserFeelings from 'components/UserFeelings';
import UserTeam from 'components/UserTeam';
import SubmitBtn from './SubmitBtn';

const Survey = () => {
  const [counter, setCounter] = useState(0);
  const [userName, setUserName] = useState('');
  const [userFeelings, setUserFeelings] = useState('');
  const [userTeam, setUserTeam] = useState('');
  /*  const [userAnswers, setUserAnswers] = useState(''); */

  const handleCounterButtonClick = (shouldIncrease) => {
    if (shouldIncrease && counter < 10) {
      setCounter(counter + 1)
    } else if (!shouldIncrease && counter > 0) {
      setCounter(counter - 1)
    }
  }
  /*
  const handleUserInputChange = (event) => {
    setUserInput(event.target.value)
  } */

  const handleRestartButtonClick = () => {
    setCounter(0);
  }

  /*    const handleUserNameInputChange = (event) => {
    setUserName(event.target.value)
  } */

  /*   const handleUserAnswersClick = (event) => {
      setUserAnswers(event.target.value)
    } */

  return (
    <section className="outer-wrapper">
      <section className="inner-wrapper">
        <div className="survey">
          {/* {counter} */}
          {counter === 0 && (
            <div>
              <FirstPage />
              <button type="button" onClick={() => handleCounterButtonClick(true)}> START</button>
            </div>
          )}

          {counter === 1 && (
            <div>
              <UserName
                userName={userName}
                setUserName={setUserName}
              />
            </div>
          )}

          {counter === 2 && (
            <div>
              <UserTeam
                userTeam={userTeam}
                setUserTeam={setUserTeam}
                userName={userName}
              />
            </div>
          )}

          {counter === 3 && (
            <div>
              <UserFeelings
                feelings={userFeelings}
                setFeelings={setUserFeelings}
                name={userName}
              />
            </div>
          )}

          {counter === 4 && (
            <div>
              <h3>Well done! Are you sure you want to submit?</h3>
              <SubmitBtn
                name={userName}
                team={userTeam}
                feelings={userFeelings}
              />
              <p>
                <button type="button" onClick={handleRestartButtonClick}>Restart</button>
              </p>
            </div>
          )}

          {(counter >= 1 && counter <= 3) && (
            <div>
              <button type="button" onClick={() => handleCounterButtonClick(false)}> Back</button>
              <button type="button" onClick={() => handleCounterButtonClick(true)}> Next</button>
            </div>
          )}

        </div>
      </section>
    </section>
  );
};

export default Survey

