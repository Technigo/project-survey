// import { isScopedModule } from 'eslint-plugin-import/lib/core/importType'
// import staticRequire from 'eslint-plugin-import/lib/core/staticRequire'
import React, { useState } from 'react'

import { PronounInput } from 'components/PronounInput'
import { NameInput } from 'components/NameInput'
import { AgeInput } from 'components/AgeInput'
import { Overview } from 'components/Overview'
import { LocationInput } from 'components/LocationInput'


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
        <NameInput 
          state={state}
          handleInput={handleInput}
          />
        <PronounInput 
          pronoun={pronoun}
          setPronoun={setPronoun}
        />

        <button onClick={handlePrevStepClick}>Back</button>
        <button onClick={handleNextStepClick}>Next</button>    
          
        {/* Age */}
        <AgeInput 
          state={state}
          handleInput={handleInput}
        />

        <button onClick={handlePrevStepClick}>Back</button>
        <button onClick={handleNextStepClick}>Next</button>    

        {/* Location */}
        <LocationInput 
          state={state}
          handleInput={handleInput}
        />
        <button onClick={handlePrevStepClick}>Back</button>
        <button onClick={handleNextStepClick}>Next</button>    

        
        {/* Date and time */}
        <label htmlFor='date'>Date From:
          <input 
            type='date'
            name='date'
            value={state.date}
            onChange={handleInput} 
            /> 
        </label>  

        <label htmlFor='timeFrom'>From:
          <input 
            id='timeFrom'
            type='time'
            name='timeFrom'
            value={state.timeFrom}
            onChange={handleInput} 
            /> 
        </label>  

        <label htmlFor='timeTo'>To:
          <input 
            id='timeTo'
            type='time'
            name='timeTo'
            value={state.timeTo}
            onChange={handleInput} 
            /> 
        </label>  
        <button onClick={handlePrevStepClick}>Back</button>
        <button onClick={handleNextStepClick}>Next</button>    

        {/* Gifts     */}
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
        <button onClick={handlePrevStepClick}>Back</button>
        <button onClick={handleNextStepClick}>Next</button>    
      

        {/* RVSP */}
        <label htmlFor='date'>RVSP:
          <input 
            type='date'
            name='rvspDate'
            value={state.rvspDate}
            onChange={handleInput} 
          /> 
        </label>
        
        <label htmlFor='rvspTo'>To:
          <input 
            type='text'
            name='rvspTo'
            placeholder='tel/email'
            value={state.rvspTo}
            onChange={handleInput}
            required 
            />
        </label>
        <button onClick={handlePrevStepClick}>Back</button>
        <button onClick={handleNextStepClick}>Next</button>        
        
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
