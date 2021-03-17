import React from 'react'
import NameQuestion from './NameQuestion'
import ColorQuestion from './ColorQuestion'
import EmailQuestion from './EmailQuestion'
import TelephoneQuestion from './TelephoneQuestion'
import PersonalityQuestion from './PersonalityQuestion'
import OccupationQuestion from './OccupationQuestion'
import Submit from './Submit'

const Survey = () => {
  return (
    <form class="survey" onSubmit={(event) => event.preventDefault()}>
      <NameQuestion/>
      <OccupationQuestion/>
      <EmailQuestion/>
      <TelephoneQuestion/>
      <ColorQuestion/>
      <PersonalityQuestion/>
      <Submit/>
    </form>
  )
}

export default Survey;