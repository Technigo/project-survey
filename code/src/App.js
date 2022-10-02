import React, { useState } from 'react';
import { Start } from 'components/Start';
import { Sleep } from 'components/Sleep';
import { Food } from 'components/Food';
import { Activity } from 'components/Activity';
import { Summary } from 'components/Summary';
import { Button } from 'components/Button';

export const App = () => {
  const [counter, setCounter] = useState(0)
  const [userSleepHabit, setUserSleepHabit] = useState('')
  const [userFoodHabit, setUserFoodHabit] = useState('')
  const [userActivity, setUserActivity] = useState('')

  const handleCounterButtonClick = (shouldIncrease) => {
    if (shouldIncrease && counter < 4) {
      setCounter(counter + 1)
    } else if (!shouldIncrease && counter > 0) {
      setCounter(counter - 1)
    }
  }
  const refreshPage = () => {
    window.location.reload(false);
  }
  const handleSubmit = () => {
    window.alert('Thanks for doing our survey!')
  }

  return (
    <div className="container">
      <div className="survey-box">
        {counter === 0 && (
          <>
            <Start />
            <Button
              btnText="Begin!"
              btnClickFunction={() => handleCounterButtonClick(true)} />
          </>
        )}
        {counter === 1 && (
          <>
            <Sleep
              sleepHabit={userSleepHabit}
              setSleepHabit={setUserSleepHabit} />

            <div className="button-group">
              <Button
                btnText="Back"
                btnClickFunction={() => handleCounterButtonClick(false)} />
              <Button
                btnText="Next"
                btnClickFunction={() => handleCounterButtonClick(true)} />
            </div>
          </>
        )}
        {counter === 2 && (
          <>
            <Food
              foodHabit={userFoodHabit}
              setFoodHabit={setUserFoodHabit} />

            <div className="button-group">
              <Button
                btnText="Back"
                btnClickFunction={() => handleCounterButtonClick(false)} />
              <Button
                btnText="Next"
                btnClickFunction={() => handleCounterButtonClick(true)} />
            </div>
          </>)}
        {counter === 3 && (
          <>
            <Activity
              activityTime={userActivity}
              setActivityTime={setUserActivity} />

            <div className="button-group">
              <Button
                btnText="Back"
                btnClickFunction={() => handleCounterButtonClick(false)} />
              <Button
                btnText="Next"
                btnClickFunction={() => handleCounterButtonClick(true)} />
            </div>
          </>)}
        {counter === 4 && (
          <>
            <Summary
              sleepHabit={userSleepHabit}
              foodHabit={userFoodHabit}
              activityTime={userActivity} />

            <div className="button-group">
              <Button
                btnText="Submit!"
                btnClickFunction={handleSubmit} />
              <Button
                btnText="Back"
                btnClickFunction={() => handleCounterButtonClick(false)} />
              <Button
                btnText="Start over"
                btnClickFunction={refreshPage} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
