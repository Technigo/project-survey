import DropdownLocation from 'DropdownLocation'
import NameInput from 'NameInput'
import RadioBtnAge from 'RadioBtnAge'
import React from 'react'
import Summary from 'Summary'
import Header from './Header'

export const App = () => {

  return (
    <>
      {/* WELCOME SECTION */}
      <section className='welcome'>
        <Header />
      </section>
      <button>Start</button>

      {/* NAME SECTION */}
      <section className='name-input'>
        <NameInput/>

      <div className='button-wrapper'>
          <button>Back</button>
          <button>Next</button>
      </div>
      </section>

      {/* LOCATION SECTION */}
      <section className='location'>
        <DropdownLocation />

        <div className='button-wrapper'>
          <button>Back</button>
          <button>Next</button>
      </div>
      </section>

      {/* AGE SECTION */}
      <section className='radio-age'>
        <RadioBtnAge />
        <button>Submit</button>
      </section>

      {/* SUMMARY */}
      <section>
        <Summary/>
      </section>
    </>
  )
}
