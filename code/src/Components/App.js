import React, { useState } from 'react'
import QuestionWrapper from './QuestionWrapper'
import questionData from '../questionData.json'
import SubmitButton from './SubmitButton'

//TO-DO:
//[X] Set up hooks for each question storing the user's current input
//[X] Maybe have hooks track everything live, live updating a summary paragraph,
// but there is still a submit button for the recommendation!!
//[_] Remove optionsData!
//[X] Make radio buttons functional!
//2h [X] [X] Make select dropdown functional! What is missing is how to pass
//4h [_] Start styling
//1h [_] Grasp what controlled inputs are again and double check mine are
//All weekend [_] Accessability test

// export const setHijinx = (value) => {
//   setHijinx(value)
//   console.log(hijinx)
// }

export const App = () => {
  const [magic, setMagic] = useState(null)
  const [tech, setTech] = useState(null)
  const [hijinx, setHijinx] = useState(null)
  const [grim, setGrim] = useState(null)
  const [spiritual, setSpiritual] = useState(null)

  const [bestAt, setBestAt] = useState("")
  const [nextToBestAt, setNextToBestAt] = useState("")
  const [worstAt, setWorstAt] = useState("")
  
  //I might not need these as States after all, just one state per dropdown? Why is this? I think I'll be able to articulate it later
  const [str, setStr] = useState(null)
  const [dex, setDex] = useState(null)
  const [con, setCon] = useState(null)
  const [int, setInt] = useState(null)
  const [wis, setWis] = useState(null)
  const [cha, setCha] = useState(null)
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
    console.log(`best at: ${value}`)
    switch (value) {
      case "STR":
        setStr(2)
        console.log(`STR: ${str}`)
        break
      case "DEX":
        setDex(2)
        break
      case "CON":
        setCon(2)
        break
      case "INT":
        setInt(2)
        break
      case "WIS":
        setWis(2)
        break
      case "CHA":
        setCha(2)
        break
    }
    
    setBestAt(value)
  
  }

  const onNextToBestAtChange = (value) => {
    console.log(`next to best at: ${value}`)
    switch (value) {
      case "STR":
        setStr(1)
        break
      case "DEX":
        setDex(1)
        break
      case "CON":
        setCon(1)
        break
      case "INT":
        setInt(1)
        break
      case "WIS":
        setWis(1)
        break
      case "CHA":
        setCha(1)
        break
    } 

    setNextToBestAt(value)

  }

  const onWorstAtChange = (value) => {
    console.log(`worst at: ${value}`)
    switch (value) {
      case "STR":
        setStr(-2)
        break
      case "DEX":
        setDex(-2)
        break
      case "CON":
        setCon(-2)
        break
      case "INT":
        setInt(-2)
        break
      case "WIS":
        setWis(-2)
        break
      case "CHA":
        setCha(-2)
        break
    }
    
    setWorstAt(value)

  }

  const onSubmit = () => {
    console.log("HELLO!")
    
    let results = {
      spiritual: spiritual,
      magical: magic,
      toolsNTech: tech,
      grim: grim,
      bestAt: bestAt,
      nextToBestAt: nextToBestAt,
      worstAt: worstAt,
      hijinx: hijinx,
      usesSTR: str,
      usesDEX: dex,
      usesCON: con,
      usesINT: int,
      usesWIS: wis,
      usesCHA: cha
    }



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
        question={questionData.questions.statQuestions.bestAt}
        options={questionData.questions.statQuestions.options}
        toChange={onBestAtChange}
        skillLevel = {bestAt}
      />
      <QuestionWrapper 
        question={questionData.questions.statQuestions.nextToBestAt}
        options={questionData.questions.statQuestions.options}
        toChange={onNextToBestAtChange}
        skillLevel = {nextToBestAt}
      />
      <QuestionWrapper 
        question={questionData.questions.statQuestions.worstAt}
        options={questionData.questions.statQuestions.options}
        toChange={onWorstAtChange}
        skillLevel = {worstAt}
      />

      <SubmitButton 
        onSubmit={onSubmit}
      />

      <div>
        <p>// Hijinx: {hijinx} // Magic: {magic} // Tech: {tech} // Spiritual: {spiritual} // Grim: {grim} //</p> 
        <p>// STR: {str} // DEX: {dex} // CON: {con} //</p>
        <p>// INT: {int} // WIS: {wis} // CHA: {cha}//</p>
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




