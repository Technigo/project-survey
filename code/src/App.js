import React, {useState} from 'react'
import Header from 'components/Header'
import ProgressBar from 'components/ProgressBar'
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

  // tipi - Personality Questions
  const [tipiq2Answer, tipiq2Question] = useState("default");
  const [tipiq3Answer, tipiq3Question] = useState("default");
  const [tipiq1Answer, tipiq1Question] = useState("default");
  const [tipiq4Answer, tipiq4Question] = useState("default");
  const [tipiq5Answer, tipiq5Question] = useState("default");
  const [tipiq6Answer, tipiq6Question] = useState("default");
  const [tipiq7Answer, tipiq7Question] = useState("default");
  const [tipiq8Answer, tipiq8Question] = useState("default");
  const [tipiq9Answer, tipiq9Question] = useState("default");
  const [tipiq10Answer, tipiq10Question] = useState("default");

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

  // setPageNumber State
  const [pageNumber, setPageNumber] = useState(0);

  // setError State
  const [error, setError] = useState('noError')

  return (
    <section className='page'>
    <Header />
    <ProgressBar
      pageNumber = {pageNumber}
    />

    {pageNumber === 0 && <IntroPage />}

    {pageNumber === 1 && 
    <Name 
      name={name} 
      askName={askName}
      error={error}
    />
    }

    {pageNumber === 2 && 
    <Gender 
      gender = {gender}
      askGender = {askGender}
      error={error}
    />}

    {pageNumber === 3 &&
    <AgeGroup 
      age = {age}
      askAge = {askAge}
      error = {error}
    />
    }

    {pageNumber === 4 &&
    <TipiDropDown 
      q1Answer = {tipiq1Answer}
      q1Question = {tipiq1Question}
      q2Answer = {tipiq2Answer}
      q2Question = {tipiq2Question}
      q3Answer = {tipiq3Answer}
      q3Question = {tipiq3Question}
      q4Answer = {tipiq4Answer}
      q4Question = {tipiq4Question}
      q5Answer = {tipiq5Answer}
      q5Question = {tipiq5Question}
      q6Answer = {tipiq6Answer}
      q6Question = {tipiq6Question}
      q7Answer = {tipiq7Answer}
      q7Question = {tipiq7Question}
      q8Answer = {tipiq8Answer}
      q8Question = {tipiq8Question}
      q9Answer = {tipiq9Answer}
      q9Question = {tipiq9Question}
      q10Answer = {tipiq10Answer}
      q10Question = {tipiq10Question}
      error = {error}
    />
    }

    {pageNumber === 5 &&
    <TipiChart
      name = {name}
      age = {age}
      q1Answer = {tipiq1Answer}
      q2Answer = {tipiq2Answer}
      q3Answer = {tipiq3Answer}
      q4Answer = {tipiq4Answer}
      q5Answer = {tipiq5Answer}
      q6Answer = {tipiq6Answer}
      q7Answer = {tipiq7Answer}
      q8Answer = {tipiq8Answer}
      q9Answer = {tipiq9Answer}
      q10Answer = {tipiq10Answer}
    />
    }

    {pageNumber === 6 &&
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
      error = {error}
    />
    }

    {pageNumber === 7 &&
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
      error = {error}
    />
    }

    {pageNumber === 8 &&
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
    }

    {pageNumber === 9 &&
    <EndPage />
    }

    <NavButtons
      pageNumber = {pageNumber}
      setPageNumber = {setPageNumber}
      error = {error}
      setError = {setError}
      name = {name}
      gender = {gender}
      age = {age}
      tipiq1Answer = {tipiq1Answer}
      tipiq2Answer = {tipiq2Answer}
      tipiq3Answer = {tipiq3Answer}
      tipiq4Answer = {tipiq4Answer}
      tipiq5Answer = {tipiq5Answer}
      tipiq6Answer = {tipiq6Answer}
      tipiq7Answer = {tipiq7Answer}
      tipiq8Answer = {tipiq8Answer}
      tipiq9Answer = {tipiq9Answer}
      tipiq10Answer = {tipiq10Answer}
      tiviq1Answer = {tiviq1Answer}
      tiviq2Answer = {tiviq2Answer}
      tiviq3Answer = {tiviq3Answer}
      tiviq4Answer = {tiviq4Answer}
      tiviq5Answer = {tiviq5Answer}
      tiviq6Answer = {tiviq6Answer}
      tiviq7Answer = {tiviq7Answer}
      tiviq8Answer = {tiviq8Answer}
      tiviq9Answer = {tiviq9Answer}
      tiviq10Answer = {tiviq10Answer}
      tiviq11Answer = {tiviq11Answer}
      tiviq12Answer = {tiviq12Answer}
      tiviq13Answer = {tiviq13Answer}
      tiviq14Answer = {tiviq14Answer}
      tiviq15Answer = {tiviq15Answer}
      tiviq16Answer = {tiviq16Answer}
      tiviq17Answer = {tiviq17Answer}
      tiviq18Answer = {tiviq18Answer}
      tiviq19Answer = {tiviq19Answer}
      tiviq20Answer = {tiviq20Answer}
    />
    <Footer />
    </section>
  )

  // return (
  //   <section className="page">
  //     <Header />
  //     <ProgressBar 
  //       pageNumber = {pageNumber}
  //     />
  //     <IntroPage />
  //     <Name 
  //       name = {name}
  //       askName = {askName}
  //     />
  //     <Gender 
  //       gender = {gender}
  //       askGender = {askGender}
  //     />
  //     <AgeGroup 
  //       age = {age}
  //       askAge = {askAge}
  //     />
  //     <TipiDropDown 
  //       q1Answer = {tipiq1Answer}
  //       q1Question = {tipiq1Question}
  //       q2Answer = {tipiq2Answer}
  //       q2Question = {tipiq2Question}
  //       q3Answer = {tipiq3Answer}
  //       q3Question = {tipiq3Question}
  //       q4Answer = {tipiq4Answer}
  //       q4Question = {tipiq4Question}
  //       q5Answer = {tipiq5Answer}
  //       q5Question = {tipiq5Question}
  //       q6Answer = {tipiq6Answer}
  //       q6Question = {tipiq6Question}
  //       q7Answer = {tipiq7Answer}
  //       q7Question = {tipiq7Question}
  //       q8Answer = {tipiq8Answer}
  //       q8Question = {tipiq8Question}
  //       q9Answer = {tipiq9Answer}
  //       q9Question = {tipiq9Question}
  //       q10Answer = {tipiq10Answer}
  //       q10Question = {tipiq10Question}
  //     />
  //     <TipiChart
  //       name = {name}
  //       // gender = {gender}
  //       age = {age}
  //       q1Answer = {tipiq1Answer}
  //       q2Answer = {tipiq2Answer}
  //       q3Answer = {tipiq3Answer}
  //       q4Answer = {tipiq4Answer}
  //       q5Answer = {tipiq5Answer}
  //       q6Answer = {tipiq6Answer}
  //       q7Answer = {tipiq7Answer}
  //       q8Answer = {tipiq8Answer}
  //       q9Answer = {tipiq9Answer}
  //       q10Answer = {tipiq10Answer}
  //     />
  //     <TiviDropDownOne 
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
  //     <TiviDropDownTwo 
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
  //     <EndPage />
  //     <NavButtons 
  //       pageNumber = {pageNumber}
  //       setPageNumber = {setPageNumber}
  //     />
  //     <Footer />
  //   </section>
  // )

}
