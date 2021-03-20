import React, { useState } from 'react'

import { Heading } from 'components/Header.js'
import { Input1 } from 'components/Input1.js'
import { Input2 } from 'components/Input2.js'
import { Input3 } from 'components/Input3.js'
import { Submit } from 'components/Submit.js'
import { SummaryWrapper } from 'components/Summary'

export const App = () => {

//useState Hooks
  const [activity, setActivity] = useState('')
  const [month, setMonth] = useState('')
  const [temperature, setTemperature] = useState()
  const [summary, setSummary] = useState(false)

  return (
     <>
     {!summary ? (
      <div>
        < Heading
          heading="Whats your Vacation Style?"
        />
        <form className="form">
          <div className="input-one">
            < Input1
              setActivity={setActivity}
              activity={activity}
            />
          </div>
          <div className="input-two">
            < Input2
              setMonth={setMonth}
              month={month}
            />
          </div>
          <div className="input-three">
            < Input3
              setTemperature={setTemperature}
              temperature={temperature}
            />
          </div>
          < Submit 
            setSummary={setSummary}
          />
          </form> 
      </div> 
         ):(
            < SummaryWrapper 
                activity={activity} 
                month={month} 
                temperature={temperature}
          />
          )}
        </>
    )
}
