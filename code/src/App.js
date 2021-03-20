import React, { useState } from 'react';

import Welcome from './components/Welcome';
import NameInput from './components/NameInput'
import MainDish from './components/MainDish';
import SideDish from './components/SideDish';
import Condiments from './components/Condiments';
import Summary from './components/Summary';

import './index.css';

export const App = () => {

  //Selecting the next section state

  const [section, setSection] = useState('welcome');
  //Name state
  const [name, setName] =useState('');
  //Main dish state
  const [mainDish, setMainDish] = useState('');
  //Side dish state
  const [sideDish, setSideDish] = useState('');
  //Condiment state
  const [condiment, setCondiment] = useState('')


  //Functions to get the input

  const onNameChange = (e) => {
    setName(e.target.value)
  };

  const onMainDishChange = (e) => {
    setMainDish(e.target.value)
  };

  const onSideDishChange = (e) => {
    setSideDish(e.target.value)
  };

  const onCondimentChange = (e) => {
    setCondiment(e.target.value)
  }
  

  return (
    <>
    {/*WELCOME SECTION*/}
    {section === 'welcome' && (
      <div aria-label="Welcome" className='welcome'>
         <Welcome />
         <button
         className='start-btn'
         onClick={() => {setSection('name-input') }}
        > 
        Start
        </button>
        </div>
    )}
    
    {/*name section*/}
    {section === 'name-input' && (
      <section aria-label="Name input" className='name-input'>
        <NameInput
      name={name}
      setName={setName}
      id='name'
      onNameChange={onNameChange}
      />
      <div className='button-wrapper'>
        <button
        className='back-button'
        type='button'
        value='welcome'
        onClick={event => {setSection(event.target.value) }}
        >
          Back
          </button>
          <button
            className='next-button'
            type="submit"
            value='main-dish'
            onClick={event => { setSection(event.target.value) }}
            >
          Next
        </button>
      </div>

      </section>
    )}

    {/*MAIN DISH SECTION*/}
      {section === 'main-dish' && (
        <section aria-label="main-dish-dropdown" className='main-dish'>
          <MainDish
            mainDish={mainDish}
            label={name}
            onMainDishChange={onMainDishChange}
            />
          <div className='button-wrapper'>
            <button
            type="button"
            value="name-input"
            onClick={event => { setSection(event.target.value)}}
            className="back-button"
            >
              Back
              </button>
              <button
              type="submit"
              value="name"
              onClick={event => {setSection(event.target.value)}}
              className="next-button"
              >
              <button
            className='next-button'
            type="submit"
            value='side-dish'
            onClick={event => { setSection(event.target.value) }}
            >
          Next
        </button>
              </button>

          </div>
        </section>
      )}
    {/*SIDE DISH SECTION*/}
    {section === 'side-dish' && (
        <section aria-label="side-dish-dropdown" className='side-dish'>
          <SideDish
            sideDish={sideDish}
            label={name}
            onSideDishChange={onSideDishChange}
            />
          <div className='button-wrapper'>
            <button
            type="button"
            value="main-dish"
            onClick={event => { setSection(event.target.value)}}
            className="back-button"
            >
              Back
              </button>
              <button
              type="submit"
              value="condiments"
              onClick={event => {setSection(event.target.value)}}
              className="next-button"
              >
                Next
                </button>
          </div>
        </section>
      )}


      {/*CONDIMENTS SECTION*/}
      {section === 'condiments' && (
        <section aria-label="condiment select" className='condiment'>
          <Condiments 
          condiments={Condiments}
          onCondimentChange={onCondimentChange}
          />

          <div className='button-wrapper'>
            <button 
            type="button"
            value="side-dish"
            onClick={event => {setSection(event.target.value) }}
            className="back-button"
            >
              Back
            </button>
            <button
              className="submit-button"
              value='summary'
              onClick={event => { setSection(event.target.value)}}
              >
              Submit
              </button>
          </div>
        </section>
      )}

      
      {/*SUMMARY*/}
      {section === 'summary' && (
        <section aria-label="Summary">
          <Summary
          condiment={condiment}
          mainDish={mainDish}
          sideDish={sideDish}
          name={name}
          />
        </section>
      )}
    
    </> 
  ) 

}


  




