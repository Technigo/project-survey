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
    const [error, setError]           = useState('')

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
    if(!name || name.match(/[0-9]/g)){
      setError('Please enter your name')
    }else if(!personNumber && count === 2 ){
      setError('Please choose one option')
    }else if(!ageGroup && count === 2 ){
      setError('Please choose one option')
    }else if(!ageGroup && count === 3 ){
      setError('Please choose one option')
    }else if(!email && count === 4 ){
      setError('Please write your email')
    }else if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && count === 4 ){
      setError('Invalid email format')
    }else{
      if(count < stepCounts.length){
        setCount(count + 1)
      }
      if (count === stepCounts.length){
        setCount(stepCounts.length)
        setNextBtn(false)
        setReviewInfo(true)
      }
      setBackBtn(true)
    }
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
    {count !== 0 && <Header/>}

    {count !== 0 && <Progress count={count} totalStep={stepCounts.length}/>}

    {count !== 0 && <Slider count = {count} totalStep={stepCounts.length}/>}

    {count !== 0 && 
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
        setError = {setError}
        />}

      {<div className='error-msg'>{error}</div>}

    {reviewInfo &&
    <Reviewinformation 
    setBackBtn = {setBackBtn}
    count = {count}
    setCount={setCount}
    name = {name} 
    personNumber = {personNumber}
    ageGroup = {ageGroup}
    email = {email}
    />}

    <div className='sectionbtn'>
      {backBtn && <button className='btn btn-primary' onClick={back}>Back</button>}
      {nextBtn && <button className='btn btn-primary' onClick={next}>Next</button>}
    </div>
    </>
  )
}

export default Survey