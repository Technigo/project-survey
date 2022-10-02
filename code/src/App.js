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
    window.alert('Thanks for doing our survey! Your answers are submitted')
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
          <div>
            <Sleep
              sleepHabit={userSleepHabit}
              setSleepHabit={setUserSleepHabit} />
            <div className="button-items">
              <Button
                btnText="Go back"
                btnClickFunction={() => handleCounterButtonClick(false)} />
              <Button
                btnText="Next question"
                btnClickFunction={() => handleCounterButtonClick(true)} />
            </div>
          </div>
        )}
        {counter === 2 && (
          <div>
            <Food
              foodHabit={userFoodHabit}
              setFoodHabit={setUserFoodHabit} />
            <div className="button-items">

              <Button
                btnText="Go back"
                btnClickFunction={() => handleCounterButtonClick(false)} />
              <Button
                btnText="Next question"
                btnClickFunction={() => handleCounterButtonClick(true)} />
            </div>
          </div>)}
        {counter === 3 && (
          <div>
            <Activity
              activityTime={userActivity}
              setActivityTime={setUserActivity} />
            <div className="button-items">

              <Button
                btnText="Go back"
                btnClickFunction={() => handleCounterButtonClick(false)} />
              <Button
                btnText="Next question"
                btnClickFunction={() => handleCounterButtonClick(true)} />
            </div>
          </div>)}
        {counter === 4 && (
          <><Summary
            sleepHabit={userSleepHabit}
            foodHabit={userFoodHabit}
            activityTime={userActivity} />
          <div className="button-items">

            <Button
              btnText="Submit!"
              btnClickFunction={handleSubmit} />
            <Button
              btnText="Go back"
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
