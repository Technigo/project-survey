import React, { useState } from 'react'

import { Heading } from 'components/Header.js'
import { Input1 } from 'components/Input1.js'
import { Input2 } from 'components/Input2.js'
import { Input3 } from 'components/Input3.js'


// const isSurveyComplete = () => {
 
//   if (activity === '') {
//     return false
//   }

//   if (month === '') {
//     return false
//   }

//   if (temperature === '') {
//     return false
//   }
//   return true
// }

// if (isSurveyComplete()) {
//   console.log('Survey complete!')
// }


export const App = () => {

  const [activity, setActivity] = useState('')
  const [month, setMonth] = useState('')
  const [temperature, setTemperature] = useState()

   return (
    <div>
      < Heading
        subheading="Whats your Vacay Mode?!"
      />
      <form className="form">
        <div className="input-one text-input">
          < Input1
            //question="Favourite vacation activity"
            //type="text" // maybe use name of component instead to specify type
            setActivity={setActivity}
            activity={activity}
          />
        </div>
        <div className="input-two select-input">
          < Input2
            //question="Best summer month"
            //type="select"
            //options={optionsQuestionTwo}
            setMonth={setMonth}
            month={month}
          />
        </div>
        <div className="input-three radio-input">
          < Input3
            //question="Preferred temperature"
            //type="radio"
            //options={optionsQuestionThree}
            setTemperature={setTemperature}
            temperature={temperature}
          />
        </div>
        <input type="submit">
        </input>
      </form> 
    </div> 

  )
}
