import React from 'react'
import { NameQuestion }  from './Components/NameQuestion.js';
import { NoseQuestion }  from './Components/NoseQuestion.js';
import { EyeQuestion }  from './Components/EyeQuestion.js';

export const App = () => {
  return (
    <div>
       <NameQuestion />
       <NoseQuestion />
       <EyeQuestion />
     
    </div>
  )
}
