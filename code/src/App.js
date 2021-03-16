import React from 'react'

import { Heading } from 'components/Header.js'
import { Input1 } from 'components/Input1.js'
import { Input2 } from 'components/Input2.js'
import { Input3 } from 'components/Input3.js'
import { Submit } from 'components/Submit.js'
import { SummaryWrapper } from 'components/Summary'

export const App = () => {

  const optionsQuestionTwo = ['June', 'July', 'August']
  const optionsQuestionThree = ['< 20', '20-25', '25 <']
 
  return (
    <div>
      < Heading
        subheading="Whats your Vacay Mode?!"
      />
      <form className="form" 
        onSubmit={ < SummaryWrapper />}        
      >
        <div className="input-one">
          < Input1
            question="Favourite vacation activity"
            type="text"
          />
        </div>
        <div className="input-two">
          < Input2
            question="Best summer weeks"
            type="select"
            options={optionsQuestionTwo}
          />
        </div>
        <div className="input-three">
          < Input3
            question="My preferred temperature"
            type="radio"
            options={optionsQuestionThree}
          />
        </div>
        <input type="submit">
        </input>
      < Submit />
      </form> 
    </div>
  )
}
