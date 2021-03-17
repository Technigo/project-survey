import React, { useState } from 'react'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { HeroImage } from './components/HeroImage'
import { Summary } from './components/Summary'
import { OnlyIf } from './components/OnlyIf'


export const App = () => {
  const [summary, setSummary] = useState();

  const onFormSubmit = (formInfo) => {
    setSummary(formInfo)
  }

  return (
    <>
      <div className="content">
        <div>
          <HeroImage class="heroimage" />
        </div>
        <div>
          <Header />
          <div className="container">
            <OnlyIf test={!summary}>
              <Form onSubmit={onFormSubmit}/>
            </OnlyIf>
            <OnlyIf test={summary}>
              <Summary summary={summary}/>
            </OnlyIf>
          </div>
        </div>
      </div>
    </>
  )
}
