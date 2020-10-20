import React from "react"
import { Header } from "./Header"
// import { AllQuestions } from "./AllQuestions"
import { NewQuestions } from "./NewQuestions"

export const App = () => {
  return (
    <>
      <Header />
      <section>
        <NewQuestions />
      </section>
    </>
  )
}
