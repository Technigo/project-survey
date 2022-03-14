import React, {useState} from 'react'
import Header from 'components/Header'
import Name from 'components/Name'
import Gender from 'components/Gender'
import AgeGroup from 'components/AgeGroup'
import TipiDropDown from 'components/TipiDropDown'
import { TipiChart } from 'components/TipiChart'
import Footer from 'components/Footer'

export const App = () => {
  const [name, askName] = useState('')
  // const [gender, askGender] = useState('')
  const [age, askAge] = useState('')

  const [q1Answer, q1Question] = useState("default");
  const [q2Answer, q2Question] = useState("default");
  const [q3Answer, q3Question] = useState("default");
  const [q4Answer, q4Question] = useState("default");
  const [q5Answer, q5Question] = useState("default");
  const [q6Answer, q6Question] = useState("default");
  const [q7Answer, q7Question] = useState("default");
  const [q8Answer, q8Question] = useState("default");
  const [q9Answer, q9Question] = useState("default");
  const [q10Answer, q10Question] = useState("default");

  return (
    <section className="page">
    <Header />
      <Name 
        name = {name}
        askName = {askName}
      />
      {/* <Gender 
        gender = {gender}
        askGender = {askGender}
      /> */}
      <AgeGroup 
        age = {age}
        askAge = {askAge}
      />
      <TipiDropDown 
        q1Answer = {q1Answer}
        q1Question = {q1Question}
        q2Answer = {q2Answer}
        q2Question = {q2Question}
        q3Answer = {q3Answer}
        q3Question = {q3Question}
        q4Answer = {q4Answer}
        q4Question = {q4Question}
        q5Answer = {q5Answer}
        q5Question = {q5Question}
        q6Answer = {q6Answer}
        q6Question = {q6Question}
        q7Answer = {q7Answer}
        q7Question = {q7Question}
        q8Answer = {q8Answer}
        q8Question = {q8Question}
        q9Answer = {q9Answer}
        q9Question = {q9Question}
        q10Answer = {q10Answer}
        q10Question = {q10Question}
      />
      <TipiChart
        name = {name}
        // gender = {gender}
        age = {age}
        q1Answer = {q1Answer}
        q2Answer = {q2Answer}
        q3Answer = {q3Answer}
        q4Answer = {q4Answer}
        q5Answer = {q5Answer}
        q6Answer = {q6Answer}
        q7Answer = {q7Answer}
        q8Answer = {q8Answer}
        q9Answer = {q9Answer}
        q10Answer = {q10Answer}
      />
    <Footer />
    </section>
  )
}
