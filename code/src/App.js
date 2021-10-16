import React, { useState } from 'react'
import Home from "./Home/Home"
import Footer from "./Footer/Footer"
import QuestionsCard from "./Questions/QuestionsCard"
import data from "./data.json"

export const App = () => {
  const [showHome, setShowHome] = useState(true)
  const [current, setCurrent] = useState(null)
  const [questionsRecord, setQuestionsRecord] = useState([])
  const [showStory, setShowStory] = useState(false)
  const [result, setResult] = useState({})



  return (
    <section>
      {showHome && <><Home
        setShowHome={setShowHome}
        current={current}
        setCurrent={setCurrent}
        setQuestionsRecord={setQuestionsRecord}
        questionsRecord={questionsRecord} />
        <Footer /></>}
      {current && <QuestionsCard
        setShowHome={setShowHome}
        data={data}
        current={current}
        setCurrent={setCurrent}
        setShowStory={setShowStory}
        setQuestionsRecord={setQuestionsRecord}
        questionsRecord={questionsRecord}
        setResult={setResult}
        result={result} />
      }

    </section>
  )
}
