import React, { useState } from 'react'
import QuestionWrapper from './QuestionWrapper'
import textData from '../textData.json'


//TO-DO:
//[_] Set up hooks for each question storing the user's current input
//[X] Maybe have hooks track everything live, live updating a summary paragraph,
// but there is still a submit button for the recommendation!!

// export const setHijinx = (value) => {
//   setHijinx(value)
//   console.log(hijinx)
// }

export const App = () => {
  const [magic, setMagic] = useState(-10)
  const [tech, setTech] = useState(-10)
  const [hijinx, setHijinx] = useState(-10)
  const [grim, setGrim] = useState(-10)
  const [spiritual, setSpiritual] = useState(-10)
  const [str, setStr] = useState(-10)
  const [dex, setDex] = useState(-10)
  const [con, setCon] = useState(-10)
  const [int, setInt] = useState(-10)
  const [wis, setWis] = useState(-10)
  const [cha, setCha] = useState(-10)
  

  return (
    <div>
      <QuestionWrapper question={textData.questions.question_1}/>
      <form>
        <div>4</div>
        <input type="radio"
          value={4}
          onChange={() => {setHijinx(4)}}                       
        ></input>
        <input type="radio"
          value={4}
          onChange={() => {setHijinx(2)}}                       
        ></input>
        <input type="radio"
          value={4}
          onChange={() => {setHijinx(0)}}                       
        ></input>
      </form>
      <div>
        <p>Your choice: {hijinx}</p>
      </div>
    </div>
  )
}




