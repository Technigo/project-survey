import React from 'react'
import { Dropdown } from 'Dropdown'
import { Radio } from 'Radio'
import { Text } from 'Text'
import { Submit } from 'Submit'


export const App = () => {
  return (
    <form>
      <Dropdown label="movie" value1="Top Gun" value2="Heat" value3="Gladiator"/>
      <Radio/>
      <Text/>
      <Submit/>
      
    </form>
  )
}
