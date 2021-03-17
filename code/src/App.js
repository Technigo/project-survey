import React, { useState } from 'react'
import { Form } from './components/Form.js'
import { Header } from './components/Header.js'
import { HeroImage } from './components/HeroImage.js'
import { Summary } from './components/Summary.js'

export const App = () => {
  const [summary, setSummary] = useState();

  const onFormSubmit = (formInfo) => {
    setSummary(formInfo)
  }

  const content = summary ? <Summary summary={summary}/> : <Form onSubmit={onFormSubmit}/>

  return (
    <>
      <div className="content">
        <div>
          <HeroImage class="heroimage" />
        </div>
        <div>
          <Header />
          <div className="container">
            {content}
          </div>
        </div>
      </div>
    </>
  )
}
