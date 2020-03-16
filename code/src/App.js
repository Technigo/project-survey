import React from 'react'
import 'app.css'
import { Banner } from './component/Banner'
import { SurveyCard } from './component/SurveyCard'


export const App = () => {
  return (
    <section className="container">

      <Banner title="Make a reservation!" />

      <SurveyCard />

      <Banner title="Restaurant slogan here" />

    </section>
  )
}
