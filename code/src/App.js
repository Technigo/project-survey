import React from 'react'
import Text from './Text'
import Select from './Select'
import Radio from './Radio'
//import Range from './Range'


export const App = () => {
  const handleSubmit = event => {
  }
  return (
    <section>
      <h1> Which lalala are you based on la</h1>
      <form onSubmit={handleSubmit}>
      <Text />
      <Select />
      <Radio />
      <button type="submit"> I'M DONE </button>
      </form>
    </section>
  )
}
