import React from "react"
import { Header } from "./Header"
import { AllQuestions } from "./AllQuestions"

export const App = () => {
  return (
    <>
      <Header />
      <section>
        <AllQuestions />
      </section>
    </>
  )
}
