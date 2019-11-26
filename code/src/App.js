import React from 'react'
import { FormHeader } from './Components/FormHeader'
import { QuestionOne } from './Components/QuestionOne'
import { QuestionTwo } from './Components/QuestionTwo'
import { QuestionThree } from './Components/QuestionThree'
import { QuestionFour } from './Components/QuestionFour'
import { SubmitButton } from './Components/SubmitButton'
import { Summary } from './Components/Summary'






export const App = () => {
  return (
    <div>
      <section className="form-container">

        <div className="form-wrapper">
          <div>
            <FormHeader />
            <QuestionOne />
            <QuestionTwo />
            <QuestionThree />
            <QuestionFour />
            <SubmitButton />
          </div>
          <div>
            <Summary />
          </div>
        </div>

      </section>

    </div>
  )
}
