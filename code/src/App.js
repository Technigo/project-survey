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
import { Button, StartButton, SubmitButton } from 'components/Buttons'
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

  const handleNextStepClick = (e) => {
    setCounter(counter + 1)
  }

  const handlePrevStepClick = () => {
    setCounter(counter - 1)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setCounter(counter + 1)
  }

  return (

    <main>
      {counter === 0 && (
        <section className='intropage-wrapper'>
          <div className='container'>
            <IntroPage />
            <StartButton 
            nextBtn={handleNextStepClick}
            />
          </div>
        </section>
      )}

      <section>
        <form className='container' onSubmit={handleSubmit}>


          {/* Name and gender */}
          {counter === 0 && (
          <div className='question-wrapper'>
            <h3>What is the name of the person to be celebrated?</h3>
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
              nextBtn={handleNextStepClick}
              prevBtn={handlePrevStepClick}
            />
          </div>
          )}
            

          {/* Age */}
          {counter === 0 && (

            <div className='question-wrapper'>
              <AgeInput 
                state={state.age}
                handleInput={handleInput}
              />
              <Button
                nextBtn={handleNextStepClick}
                prevBtn={handlePrevStepClick}
              />  
            </div>
          )}  


          {/* Location */}
          {counter === 0 && (

            <div className='question-wrapper'>
              <h3>Where should the party be?</h3>
              <TextInput
                text={'Location'}
                inputName={'location'}
                placeholder={'location/address'} 
                state={state.location}
                handleInput={handleInput}
              />

              <Button
                nextBtn={handleNextStepClick}
                prevBtn={handlePrevStepClick}
              />     
            </div>
          )}

          
          {/* Date and time */}
          {counter === 0 && (

            <div className='question-wrapper date'>
              <div className='date-wrapper'>
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
              </div> 

                <Button
                  nextBtn={handleNextStepClick}
                  prevBtn={handlePrevStepClick}
                />  
            </div>
          )}
          

          {/* Gifts */}
          {counter === 0 && (

            <div className='question-wrapper'>
              <GiftInput 
                state={state.gift}
                handleInput={handleInput}  
              />
              <Button
                nextBtn={handleNextStepClick}
                prevBtn={handlePrevStepClick}
              />               
            </div>
          )}
        

          {/* RVSP */}
          {counter === 0 && (
          <div className='question-wrapper'>  
          <h3>Who should the invited respond to?</h3>
            <TextInput 
              text={'Respont to'}
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
              nextBtn={handleNextStepClick}
              prevBtn={handlePrevStepClick}
            />           
            </div>
          )}


        {/* Select styling */}
        {counter === 0 && (
          <div className='question-wrapper'>
            <div className='theme-wrapper'>
              <ThemeInput 
                state={state.theme}
                handleInput={handleInput}  
              /> 
            </div>  
              <SubmitButton 
                nextBtn={handleNextStepClick}
                prevBtn={handlePrevStepClick}
              />  
          </div>  
        )}

        </form>
      </section>


      {/* Overview */}
      {counter === 0 && (
        <section className='overview-wrapper'>
            <Overview 
              pronoun={pronoun}
              state={state}
            />
        </section>
      )}
            
    </main>
  )
}
