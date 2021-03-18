import React, { useState } from 'react'
import QuestionWrapper from './QuestionWrapper'
import questionData from '../questionData.json'

//TO-DO:
//[X] Set up hooks for each question storing the user's current input
//[X] Maybe have hooks track everything live, live updating a summary paragraph,
// but there is still a submit button for the recommendation!!
//[_] Remove optionsData!
//[X] Make radio buttons functional!
//2h [_] Make select dropdown functional!
//4h [_] Start styling
//1h [_] Grasp what controlled inputs are again and double check mine are
//All weekend [_] Accessability test

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

  const [bestAt, setBestAt] = useState("")
  const [nextToBestAt, setNextToBestAt] = useState("")
  const [worstAt, setWorstAt] = useState("")
  
  //I might not need these as States after all, just one state per dropdown? Why is this? I think I'll be able to articulate it later
  const [str, setStr] = useState(-10)
  const [dex, setDex] = useState(-10)
  const [con, setCon] = useState(-10)
  const [int, setInt] = useState(-10)
  const [wis, setWis] = useState(-10)
  const [cha, setCha] = useState(-10)
  //to my understanding, as long I send these arrays along as props, they will be forced to update on change
  
  //radio button states
  const onHijinxChange = (value) => {
    setHijinx (value)    
  }

  const onMagicChange = (value) => {
    setMagic (value)    
  }

  const onTechChange = (value) => {
    setTech (value)    
  }

  const onGrimChange = (value) => {
    setGrim (value)    
  }

  const onSpiritualChange = (value) => {
    setSpiritual (value)    
  }

  //dropdown states
  const onBestAtChange = (value) => {
    setBestAt (value)    
  }

  const onNextToBestAtChange = (value) => {
    setNextToBestAt (value)
  }

  const onWorstAtChange = (value) => {
    setWorstAt (value)    
  }


  //I might not need these
  const onStrChange = (value) => {
    setStr (value)    
  }

  const onDexChange = (value) => {
    setDex (value)    
  }

  const onConChange = (value) => {
    setCon (value)    
  }

  const onIntChange = (value) => {
    setInt (value)    
  }

  const onWisChange = (value) => {
    setWis (value)    
  }

  const onChaChange = (value) => {
    setCha (value)    
  }

  return (
    <div>
      <QuestionWrapper 
        question={questionData.questions.question_magic}
        toChange={onMagicChange} 
        
      />
      <QuestionWrapper 
        question={questionData.questions.question_spiritual} 
        toChange={onSpiritualChange}
      />
      <QuestionWrapper 
        question={questionData.questions.question_tech} 
        toChange={onTechChange}
      />
      <QuestionWrapper 
        question={questionData.questions.question_grim} 
        toChange={onGrimChange}
      />
      <QuestionWrapper 
        question={questionData.questions.question_hijinx} 
        toChange={onHijinxChange}
      />
      <QuestionWrapper 
        question={questionData.questions.statQuestions}
        toChange={null} //is this a bad idea??
        bestAt = {bestAt}
        onBestAtChange = {onBestAtChange}
        nextToBestAt = {nextToBestAt}
        onNextToBestAtChange = {onNextToBestAtChange}
        worstAt = {worstAt}
        onWorstAtChange = {onWorstAtChange}
      />
      <div>
        <p>Hijinx: {hijinx}</p>
        <p>Magic: {magic}</p>
        <p>Tech: {tech}</p>
        <p>Spiritual: {spiritual}</p>
        <p>Grim: {grim}</p>
        <p>STR: {str}</p>
        <p>DEX: {dex}</p>
        <p>CON: {con}</p>
        <p>INT: {int}</p>
        <p>WIS: {wis}</p>
        <p>CHA: {cha}</p>
      </div>
    </div>
  )
}

//onMagicChange={onMagicChange}
// onHijinxChange={onHijinxChange}
// onSpiritualChange={onSpiritualChange}
// onGrimChange={onGrimChange}
// onTechChange={onTechChange}
// onStrChange={onStrChange}
// onDexChange={onDexChange}
// onConChange={onConChange}
// onIntChange={onIntChange}
// onWisChange={onWisChange}
// onChaChange={onChaChange}




