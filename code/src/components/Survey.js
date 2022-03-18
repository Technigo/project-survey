import React, { useState } from 'react'
import Progress from './survey-components/Progress'
import Header from './survey-components/Header'
import Questions from './survey-components/Questions'
import Reviewinformation from './survey-components/Reviewinformation'
import Slider from './survey-components/Slider'

const Survey = () => {
    const [count, setCount]           = useState(1)
    const [reviewInfo, setReviewInfo] = useState(false)

    const [nextBtn, setNextBtn]       = useState(true)
    const [backBtn, setBackBtn]       = useState(false)

    const [name,setName]                 = useState('')
    const [personNumber,setPersonNumber] = useState('')
    const [ageGroup,setAgeGroup]         = useState('')
    const [email,setEmail]               = useState('')

    const stepCounts = [
      { id: 1},
      { id: 2},
      { id: 3},
      { id: 4},
   ]

const next = () =>{
    //count step
    if(count < stepCounts.length){
      setCount(count + 1)
    }

    if (count === stepCounts.length){
      setCount(stepCounts.length)
      setNextBtn(false)

      setReviewInfo(true)
    }
    //back button display
    setBackBtn(true)
}

const back = () =>{
    setCount(count - 1)
    setNextBtn(true)
    setReviewInfo(false)

    if (count - 1 === 1){
      setBackBtn(false)
    }
}

  return (
    <>
    <Header/>

    {count !== 0 ? 
    <Progress count={count} totalStep={stepCounts.length}/> :
    null}

    <Slider count = {count} totalStep={stepCounts.length}/>

    {count !== 0 ? 
    <Questions 
        count ={count} 
        name = {name} 
        setName = {setName}
        personNumber = {personNumber}
        setPersonNumber = {setPersonNumber}
        ageGroup = {ageGroup}
        setAgeGroup = {setAgeGroup}
        email = {email}
        setEmail = {setEmail}
        /> :
    null}

    {reviewInfo ? 
    <Reviewinformation 
    count = {count}
    setCount={setCount}
    name = {name} 
    personNumber = {personNumber}
    ageGroup = {ageGroup}
    email = {email}
    /> :
    null
    }

    <div className='sectionbtn'>
      {backBtn ? 
      <button className='btn btn-primary' onClick={back}>Back</button> : 
      null}

      {nextBtn ? 
      <button className='btn btn-primary' onClick={next}>Next</button> :
      null}
    </div>
    </>
  )
}

export default Survey