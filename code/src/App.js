import React, {useState} from 'react'
import Header from 'components/Header'
import IntroPage from 'components/IntroPage'
import Name from 'components/Name'
import Gender from 'components/Gender'
import AgeGroup from 'components/AgeGroup'
import TipiDropDown from 'components/TipiDropDown'
import { TipiChart } from 'components/TipiChart'
import TiviDropDownOne from 'components/TiviDropDownOne'
import TiviDropDownTwo from 'components/TiviDropDownTwo'
import { TiviChart } from 'components/TiviChart'
import EndPage from 'components/EndPage'
import NavButtons from 'components/NavButtons'
import Footer from 'components/Footer'

export const App = () => {
  // Demographic Questions
  const [name, askName] = useState('')
  const [gender, askGender] = useState('')
  const [age, askAge] = useState('')

  // TIWI - Personality Questions
  const [tiwiq2Answer, tiwiq2Question] = useState("default");
  const [tiwiq3Answer, tiwiq3Question] = useState("default");
  const [tiwiq1Answer, tiwiq1Question] = useState("default");
  const [tiwiq4Answer, tiwiq4Question] = useState("default");
  const [tiwiq5Answer, tiwiq5Question] = useState("default");
  const [tiwiq6Answer, tiwiq6Question] = useState("default");
  const [tiwiq7Answer, tiwiq7Question] = useState("default");
  const [tiwiq8Answer, tiwiq8Question] = useState("default");
  const [tiwiq9Answer, tiwiq9Question] = useState("default");
  const [tiwiq10Answer, tiwiq10Question] = useState("default");

  // TIVI - Values Questions
  const [tiviq1Answer, tiviq1Question] = useState("default");
  const [tiviq2Answer, tiviq2Question] = useState("default");
  const [tiviq3Answer, tiviq3Question] = useState("default");
  const [tiviq4Answer, tiviq4Question] = useState("default");
  const [tiviq5Answer, tiviq5Question] = useState("default");
  const [tiviq6Answer, tiviq6Question] = useState("default");
  const [tiviq7Answer, tiviq7Question] = useState("default");
  const [tiviq8Answer, tiviq8Question] = useState("default");
  const [tiviq9Answer, tiviq9Question] = useState("default");
  const [tiviq10Answer, tiviq10Question] = useState("default");
  const [tiviq11Answer, tiviq11Question] = useState("default");
  const [tiviq12Answer, tiviq12Question] = useState("default");
  const [tiviq13Answer, tiviq13Question] = useState("default");
  const [tiviq14Answer, tiviq14Question] = useState("default");
  const [tiviq15Answer, tiviq15Question] = useState("default");
  const [tiviq16Answer, tiviq16Question] = useState("default");
  const [tiviq17Answer, tiviq17Question] = useState("default");
  const [tiviq18Answer, tiviq18Question] = useState("default");
  const [tiviq19Answer, tiviq19Question] = useState("default");
  const [tiviq20Answer, tiviq20Question] = useState("default");

  // Navbar State
  const [pageNumber, navBar] = useState(0);

  return (
    <section className="page">
      <Header />
      <IntroPage />
      <Name 
        name = {name}
        askName = {askName}
      />
      <Gender 
        gender = {gender}
        askGender = {askGender}
      />
      <AgeGroup 
        age = {age}
        askAge = {askAge}
      />
      <TipiDropDown 
        q1Answer = {tiwiq1Answer}
        q1Question = {tiwiq1Question}
        q2Answer = {tiwiq2Answer}
        q2Question = {tiwiq2Question}
        q3Answer = {tiwiq3Answer}
        q3Question = {tiwiq3Question}
        q4Answer = {tiwiq4Answer}
        q4Question = {tiwiq4Question}
        q5Answer = {tiwiq5Answer}
        q5Question = {tiwiq5Question}
        q6Answer = {tiwiq6Answer}
        q6Question = {tiwiq6Question}
        q7Answer = {tiwiq7Answer}
        q7Question = {tiwiq7Question}
        q8Answer = {tiwiq8Answer}
        q8Question = {tiwiq8Question}
        q9Answer = {tiwiq9Answer}
        q9Question = {tiwiq9Question}
        q10Answer = {tiwiq10Answer}
        q10Question = {tiwiq10Question}
      />
      <TipiChart
        name = {name}
        // gender = {gender}
        age = {age}
        q1Answer = {tiwiq1Answer}
        q2Answer = {tiwiq2Answer}
        q3Answer = {tiwiq3Answer}
        q4Answer = {tiwiq4Answer}
        q5Answer = {tiwiq5Answer}
        q6Answer = {tiwiq6Answer}
        q7Answer = {tiwiq7Answer}
        q8Answer = {tiwiq8Answer}
        q9Answer = {tiwiq9Answer}
        q10Answer = {tiwiq10Answer}
      />
      <TiviDropDownOne 
        gender = {gender}
        q1Answer = {tiviq1Answer}
        q2Answer = {tiviq2Answer}
        q3Answer = {tiviq3Answer}
        q4Answer = {tiviq4Answer}
        q5Answer = {tiviq5Answer}
        q6Answer = {tiviq6Answer}
        q7Answer = {tiviq7Answer}
        q8Answer = {tiviq8Answer}
        q9Answer = {tiviq9Answer}
        q10Answer = {tiviq10Answer}
        q1Question = {tiviq1Question}
        q2Question = {tiviq2Question}
        q3Question = {tiviq3Question}
        q4Question = {tiviq4Question}
        q5Question = {tiviq5Question}
        q6Question = {tiviq6Question}
        q7Question = {tiviq7Question}
        q8Question = {tiviq8Question}
        q9Question = {tiviq9Question}
        q10Question = {tiviq10Question}
      />
      <TiviDropDownTwo 
        gender = {gender}
        q11Answer = {tiviq11Answer}
        q12Answer = {tiviq12Answer}
        q13Answer = {tiviq13Answer}
        q14Answer = {tiviq14Answer}
        q15Answer = {tiviq15Answer}
        q16Answer = {tiviq16Answer}
        q17Answer = {tiviq17Answer}
        q18Answer = {tiviq18Answer}
        q19Answer = {tiviq19Answer}
        q20Answer = {tiviq20Answer}
        q11Question = {tiviq11Question}
        q12Question = {tiviq12Question}
        q13Question = {tiviq13Question}
        q14Question = {tiviq14Question}
        q15Question = {tiviq15Question}
        q16Question = {tiviq16Question}
        q17Question = {tiviq17Question}
        q18Question = {tiviq18Question}
        q19Question = {tiviq19Question}
        q20Question = {tiviq20Question}
      />
      <TiviChart
        q1Answer = {tiviq1Answer}
        q2Answer = {tiviq2Answer}
        q3Answer = {tiviq3Answer}
        q4Answer = {tiviq4Answer}
        q5Answer = {tiviq5Answer}
        q6Answer = {tiviq6Answer}
        q7Answer = {tiviq7Answer}
        q8Answer = {tiviq8Answer}
        q9Answer = {tiviq9Answer}
        q10Answer = {tiviq10Answer}
        q11Answer = {tiviq11Answer}
        q12Answer = {tiviq12Answer}
        q13Answer = {tiviq13Answer}
        q14Answer = {tiviq14Answer}
        q15Answer = {tiviq15Answer}
        q16Answer = {tiviq16Answer}
        q17Answer = {tiviq17Answer}
        q18Answer = {tiviq18Answer}
        q19Answer = {tiviq19Answer}
        q20Answer = {tiviq20Answer}
      />
      <EndPage />
      <NavButtons 
        pageNumber = {pageNumber}
        navBar = {navBar}
      />
      <Footer />
    </section>
  )

  // if (pageNumber === 0) {
  //   return (
  //     <section className="page">
  //     <Header />
  //     <IntroPage />
  //     <NavButtons
  //       pageNumber = {pageNumber}
  //       navBar = {navBar}
  //     />
  //     <Footer />
  //     </section>
  //   )
  // } if (pageNumber === 1) {
  //   return (
  //     <section className="page">
  //     <Header />
  //     <Name 
  //       name = {name}
  //       askName = {askName}
  //     />
  //     <NavButtons
  //       pageNumber = {pageNumber}
  //       navBar = {navBar}
  //     />
  //     <Footer />
  //     </section>
  //   )
  // } if (pageNumber === 2) {
  //   return (
  //     <section className="page">
  //     <Header />
  //     <Gender 
  //       gender = {gender}
  //       askGender = {askGender}
  //     />
  //     <NavButtons
  //       pageNumber = {pageNumber}
  //       navBar = {navBar}
  //     />
  //     <Footer />
  //     </section>
  //   )
  // } if (pageNumber === 3) {
  //   return (
  //     <section className="page">
  //     <Header />
  //     <AgeGroup 
  //       age = {age}
  //       askAge = {askAge}
  //     />
  //     <NavButtons
  //       pageNumber = {pageNumber}
  //       navBar = {navBar}
  //     />
  //     <Footer />
  //     </section>
  //   )
  // } if (pageNumber === 4) {
  //   return (
  //     <section className="page">
  //     <Header />
  //     <TipiDropDown 
  //       q1Answer = {tiwiq1Answer}
  //       q1Question = {tiwiq1Question}
  //       q2Answer = {tiwiq2Answer}
  //       q2Question = {tiwiq2Question}
  //       q3Answer = {tiwiq3Answer}
  //       q3Question = {tiwiq3Question}
  //       q4Answer = {tiwiq4Answer}
  //       q4Question = {tiwiq4Question}
  //       q5Answer = {tiwiq5Answer}
  //       q5Question = {tiwiq5Question}
  //       q6Answer = {tiwiq6Answer}
  //       q6Question = {tiwiq6Question}
  //       q7Answer = {tiwiq7Answer}
  //       q7Question = {tiwiq7Question}
  //       q8Answer = {tiwiq8Answer}
  //       q8Question = {tiwiq8Question}
  //       q9Answer = {tiwiq9Answer}
  //       q9Question = {tiwiq9Question}
  //       q10Answer = {tiwiq10Answer}
  //       q10Question = {tiwiq10Question}
  //     />
  //     <NavButtons
  //       pageNumber = {pageNumber}
  //       navBar = {navBar}
  //     />
  //     <Footer />
  //     </section>
  //   )
  // } if (pageNumber === 5) {
  //   return (
  //     <section className="page">
  //     <Header />
  //     <TipiChart
  //       name = {name}
  //       // gender = {gender}
  //       age = {age}
  //       q1Answer = {tiwiq1Answer}
  //       q2Answer = {tiwiq2Answer}
  //       q3Answer = {tiwiq3Answer}
  //       q4Answer = {tiwiq4Answer}
  //       q5Answer = {tiwiq5Answer}
  //       q6Answer = {tiwiq6Answer}
  //       q7Answer = {tiwiq7Answer}
  //       q8Answer = {tiwiq8Answer}
  //       q9Answer = {tiwiq9Answer}
  //       q10Answer = {tiwiq10Answer}
  //     />
  //     <NavButtons
  //       pageNumber = {pageNumber}
  //       navBar = {navBar}
  //     />      
  //     <Footer />
  //     </section>
  //   )
  // } if (pageNumber === 6) {
  //   return (
  //     <section className="page">
  //       <Header />
  //       <TiviDropDownOne 
  //       gender = {gender}
  //       q1Answer = {tiviq1Answer}
  //       q2Answer = {tiviq2Answer}
  //       q3Answer = {tiviq3Answer}
  //       q4Answer = {tiviq4Answer}
  //       q5Answer = {tiviq5Answer}
  //       q6Answer = {tiviq6Answer}
  //       q7Answer = {tiviq7Answer}
  //       q8Answer = {tiviq8Answer}
  //       q9Answer = {tiviq9Answer}
  //       q10Answer = {tiviq10Answer}
  //       q1Question = {tiviq1Question}
  //       q2Question = {tiviq2Question}
  //       q3Question = {tiviq3Question}
  //       q4Question = {tiviq4Question}
  //       q5Question = {tiviq5Question}
  //       q6Question = {tiviq6Question}
  //       q7Question = {tiviq7Question}
  //       q8Question = {tiviq8Question}
  //       q9Question = {tiviq9Question}
  //       q10Question = {tiviq10Question}
  //     />
  //     <NavButtons
  //       pageNumber = {pageNumber}
  //       navBar = {navBar}
  //     />
  //     <Footer />
  //     </section>
  //   )
  // } if (pageNumber === 7) {
  //   return (
  //     <section className="page">
  //       <Header />
  //       <TiviDropDownTwo 
  //       gender = {gender}
  //       q11Answer = {tiviq11Answer}
  //       q12Answer = {tiviq12Answer}
  //       q13Answer = {tiviq13Answer}
  //       q14Answer = {tiviq14Answer}
  //       q15Answer = {tiviq15Answer}
  //       q16Answer = {tiviq16Answer}
  //       q17Answer = {tiviq17Answer}
  //       q18Answer = {tiviq18Answer}
  //       q19Answer = {tiviq19Answer}
  //       q20Answer = {tiviq20Answer}
  //       q11Question = {tiviq11Question}
  //       q12Question = {tiviq12Question}
  //       q13Question = {tiviq13Question}
  //       q14Question = {tiviq14Question}
  //       q15Question = {tiviq15Question}
  //       q16Question = {tiviq16Question}
  //       q17Question = {tiviq17Question}
  //       q18Question = {tiviq18Question}
  //       q19Question = {tiviq19Question}
  //       q20Question = {tiviq20Question}
  //     />
  //     <NavButtons
  //       pageNumber = {pageNumber}
  //       navBar = {navBar}
  //     />
  //     <Footer />
  //     </section>
  //   )
  // } if (pageNumber === 8) {
  //   return (
  //     <section className="page">
  //     <Header />
  //     <TiviChart
  //       q1Answer = {tiviq1Answer}
  //       q2Answer = {tiviq2Answer}
  //       q3Answer = {tiviq3Answer}
  //       q4Answer = {tiviq4Answer}
  //       q5Answer = {tiviq5Answer}
  //       q6Answer = {tiviq6Answer}
  //       q7Answer = {tiviq7Answer}
  //       q8Answer = {tiviq8Answer}
  //       q9Answer = {tiviq9Answer}
  //       q10Answer = {tiviq10Answer}
  //       q11Answer = {tiviq11Answer}
  //       q12Answer = {tiviq12Answer}
  //       q13Answer = {tiviq13Answer}
  //       q14Answer = {tiviq14Answer}
  //       q15Answer = {tiviq15Answer}
  //       q16Answer = {tiviq16Answer}
  //       q17Answer = {tiviq17Answer}
  //       q18Answer = {tiviq18Answer}
  //       q19Answer = {tiviq19Answer}
  //       q20Answer = {tiviq20Answer}
  //     />
  //     <Footer />
  //     </section>
  //   )
  // } if (pageNumber === 9) {
  //   return (
  //     <section className="page">
  //     <Header />
  //     <EndPage />
  //     <Footer />
  //     </section>
  //   )
  // }
}
