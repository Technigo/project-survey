import React from 'react'

import { Heading } from 'components/Header.js'
import { Input1 } from 'components/Input1.js'
import { Input2 } from 'components/Input2.js'
import { Input3 } from 'components/Input3.js'
import { Submit } from 'components/Submit.js'
import { SummaryWrapper } from 'components/Summary'

export const App = () => {
  const optionsQuestionTwo = ['One1', 'Two2', 'Three3']
  const optionsQuestionThree = ['One', 'Two', 'Three']
  const optionsRadioLabels = ['Answer1', 'Answer2', 'Answer3']
  return (
    <div>
      < Heading
        subheading="Whats the survey about?"
      />
      <form className="form" onSubmit={ < SummaryWrapper />}>
        <div className="input-one">
          < Input1
            question="Question 1"
          />
        </div>
        <div className="input-two">
          < Input2
            question="Question 2"
            options={optionsQuestionTwo}
          />
        </div>
        <div className="input-three">
          < Input3
            question="Question 3"
            options={optionsQuestionThree}
            labels={optionsRadioLabels}
          />
        </div>
        <input type="submit">
        </input>
      < Submit />
      </form> 
    </div>
  )
}
