import React, { useState } from 'react';
import { Start } from 'components/Start';
import { Sleep } from 'components/Sleep';
import { Food } from 'components/Food';
import { Activity } from 'components/Activity';
import { Summary } from 'components/Summary';

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

  return (
    <div className="container">
      {counter === 0 && (
        <>
          <Start />
          <button type="button" onClick={() => handleCounterButtonClick(true)}>Begin!</button>
        </>
      )}
      {counter === 1 && (
        <div>
          <Sleep
            sleepHabit={userSleepHabit}
            setSleepHabit={setUserSleepHabit} />
          <button type="button" onClick={() => handleCounterButtonClick(false)}>Go back</button>
          <button type="button" onClick={() => handleCounterButtonClick(true)}>Next question</button>
        </div>
      )}
      {counter === 2 && (
        <div>
          <Food
            foodHabit={userFoodHabit}
            setFoodHabit={setUserFoodHabit} />
          <button type="button" onClick={() => handleCounterButtonClick(false)}>Go back</button>
          <button type="button" onClick={() => handleCounterButtonClick(true)}>Next question</button>
        </div>)}
      {counter === 3 && (
        <div>
          <Activity
            activityTime={userActivity}
            setActivityTime={setUserActivity} />
          <button type="button" onClick={() => handleCounterButtonClick(false)}>Go back</button>
          <button type="button" onClick={() => handleCounterButtonClick(true)}>Next question</button>
        </div>)}
      {counter === 4 && (
        <><Summary
          sleepHabit={userSleepHabit}
          foodHabit={userFoodHabit}
          activityTime={userActivity} />
        <button type="button" onClick={() => handleCounterButtonClick(false)}>Go back</button>
        <button type="button" onClick={refreshPage}>Start over</button>
        </>
      )}
    </div>
  );
}
