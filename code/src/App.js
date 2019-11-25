import React from 'react'
import { FormHeader } from './Components/FormHeader'
import { QuestionOne } from './Components/QuestionOne'
import { QuestionTwo } from './Components/QuestionTwo'




export const App = () => {
  return (
    <div>
      <FormHeader />

      <section className="form-wrapper">
        <div className="form-container">
          <QuestionOne />
          <QuestionTwo />

        </div>
      </section>

    </div>
  )
}
