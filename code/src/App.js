// import { isScopedModule } from 'eslint-plugin-import/lib/core/importType'
// import staticRequire from 'eslint-plugin-import/lib/core/staticRequire'
import React, { useState } from 'react'

import { IntroPage } from 'components/IntroPage'
import { TextInput } from 'components/TextInput'
import { PronounInput } from 'components/PronounInput'
import { AgeInput } from 'components/AgeInput'
import { Overview } from 'components/Overview'
import { DateInput } from 'components/DateInput'
import { TimeInput } from 'components/TimeInput'
import { GiftInput } from 'components/GiftInput'
import { Button } from 'components/Buttons'
import { ThemeInput } from 'components/ThemeInput'


export const App = () => {

  const initialState = {
    name: '',
    age: '',
    location: '',
    date: '',
    timeTo: '',
    timeFrom: '',
    gift: '',
    rvspDate: '',
    rvspTo: '',
    rvspContactDetails: '',
    theme: '',
  }

  const [state, setState] = useState(initialState)
  // const [error, setError] = useState('')
  const [counter, setCounter] = useState(0)
  const [pronoun, setPronoun] = useState()  

  const handleInput = (e) => {
    const inputName = e.target.name
    const value = e.target.value

    setState({...state, [inputName]: value })
  }

  const handleNextStepClick = () => {
    setCounter(counter + 1)
  }

  const handlePrevStepClick = () => {
    setCounter(counter - 1)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (

  <main>
    <section>
      {counter === 0 && (
        <div className='introPage-wrapper'>
          <IntroPage />
        </div>
      )}

      <form className='container' onSubmit={handleSubmit}>
        {/* Name and gender */}
          {counter === 1 && (
        <div className='question-wrapper'>
            <>
            <TextInput 
            text={'Name'}
            inputName={'name'}
            placeholder={'name'}
            state={state.name}
            handleInput={handleInput}
            />

          <PronounInput 
            pronoun={pronoun}
            setPronoun={setPronoun}
            />
          <Button
            prevBtn={handlePrevStepClick}
            nextBtn={handleNextStepClick}
            />
          </>
        </div>
          )}
          
        {/* Age */}
        <div className='question-wrapper'>
          <AgeInput 
          state={state.age}
          handleInput={handleInput}
          />
          <Button
            prevBtn={handlePrevStepClick}
            nextBtn={handleNextStepClick}
          />  
          </div>

        {/* Location */}
        <div className='question-wrapper'>
          <TextInput
          text={'Location'}
          inputName={'location'}
          placeholder={'location/adress'} 
          state={state.location}
          handleInput={handleInput}
          />
          <Button
            prevBtn={handlePrevStepClick}
            nextBtn={handleNextStepClick}
          />     
        </div>

        
        {/* Date and time */}
        <div className='question-wrapper'>
          <DateInput 
            text={'Date'}
            inputName={'date'}
            state={state.date}
            handleInput={handleInput}
          />

          <TimeInput 
            text={'From'}
            inputName={'timeFrom'}
            state={state.timeFrom}
            handleInput={handleInput}
          />

          <TimeInput 
            text={'To'}
            inputName={'timeTo'}
            state={state.timeTo}
            handleInput={handleInput}
          />
          <Button
            prevBtn={handlePrevStepClick}
            nextBtn={handleNextStepClick}
          />   
        </div>
        
            

        {/* Gifts */}
        <div className='question-wrapper'>
          <GiftInput 
            state={state.gift}
            handleInput={handleInput}  
          />
          <Button
            prevBtn={handlePrevStepClick}
            nextBtn={handleNextStepClick}
          />               
        </div>
      

        {/* RVSP */}
        <div className='question-wrapper'>  
          <TextInput 
            text={'to'}
            inputName={'rvspTo'}
            placeholder={'name'}
            state={state.rvspTo}
            handleInput={handleInput}
          />

          <TextInput 
            text={'Phone/email'}
            inputName={'rvspContactDetails'}
            placeholder={'phone/email'}
            state={state.rvspContactDetails}
            handleInput={handleInput}
          />
          <Button
            prevBtn={handlePrevStepClick}
            nextBtn={handleNextStepClick}
          />           
        </div>
                
        
      {/* Select styling */}
      <ThemeInput 
        state={state.theme}
        handleInput={handleInput}  
      /> 

      </form>
    </section>

      {/* Overview */}
    <section>
      <Overview 
        pronoun={pronoun}
        state={state}
      />
    </section>
          
  </main>

  )
}
