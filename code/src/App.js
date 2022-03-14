// import { isScopedModule } from 'eslint-plugin-import/lib/core/importType'
// import staticRequire from 'eslint-plugin-import/lib/core/staticRequire'
import React, { useState } from 'react'

import { PronounInput } from 'components/PronounInput'
import { TextInput } from 'components/TextInput'
import { AgeInput } from 'components/AgeInput'
import { Overview } from 'components/Overview'
import { DateInput } from 'components/DateInput'
import { TimeInput } from 'components/TimeInput'
import { Button } from 'components/Buttons'


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
  }

  const [state, setState] = useState(initialState)
  // const [error, setError] = useState('')
  const [pronoun, setPronoun] = useState()  
  const [counter, setCounter] = useState(0)

  const handleInput = (e) => {
    const inputName = e.target.name
    const value = e.target.value

    setState({...state, [inputName]: value })
  }

  const handleNextStepClick = () => {
    setCounter(counter + 1)
    console.log('add step + 1')
    //add state, step: '0'
  }

  const handlePrevStepClick = () => {
    setCounter(counter - 1)
    console.log('decrease step - 1')
    //add state, step: '0'
  }

  const handleSubmit = e => {
    e.preventDefault()
  }


  return (
  
  <main>
    <section>
    
      <form className='container' onSubmit={handleSubmit}>

        {/* Name and gender */}
        <div className='question-wrapper'>
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
        </div>
          
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
          state={state.date}
          handleInput={handleInput}
          />

        <TimeInput 
          text={'From'}
          state={state.timeFrom}
          handleInput={handleInput}
          />

        <TimeInput 
          text={'To'}
          state={state.timeTo}
          handleInput={handleInput}
          />

        <Button
          prevBtn={handlePrevStepClick}
          nextBtn={handleNextStepClick}
          />   
        </div>
        
            

        {/* Gifts     */}
        <div className='question-wrapper'>
          <legend>Gifts</legend>
        <label>
          <input
            type='radio'
            name='gift'
            value='Yes'
            onChange={handleInput}
            checked={state.gift === 'Yes'}
            required
            />
            Yes
          </label>

        <label>
          <input
            type='radio'
            name='gift'
            value='No'
            onChange={handleInput}
            checked={state.gift === 'No'}
            required
            />
            No
          </label>
        
        <Button
          prevBtn={handlePrevStepClick}
          nextBtn={handleNextStepClick}
          />               
        </div>
      

        {/* RVSP */}
        <div className='question-wrapper'>
          <DateInput 
          text={'RVSP'}
          state={state.rvspDate}
          handleInput={handleInput}
          />
        
        <TextInput 
          text={'RVSP TO'}
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
