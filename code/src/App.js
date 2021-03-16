import React from 'react'
import { NameQuestion }  from './Components/NameQuestion.js';
import { NoseQuestion }  from './Components/NoseQuestion.js';
import { EyeQuestion }  from './Components/EyeQuestion.js';
import { SmileQuestion }  from './Components/SmileQuestion.js';
import { MustacheQuestion }  from './Components/MustacheQuestion.js';
import { Heading }  from './Components/Heading.js';
import { SubmitQuestions }  from './Components/SubmitQuestions.js';



export const App = () => {
  return (
    <div className="main-container">
        <Heading />
        <NameQuestion />
        <NoseQuestion />
        <EyeQuestion />
        <SmileQuestion />
        <MustacheQuestion />
        <SubmitQuestions />
      
    </div>
  )
}
