import React from 'react'
import {Dropdown} from './Dropdown'
import {Radio} from './Radio'
import {Checkbox} from './Checkbox'

export const App = () => {
  return (
    <div>
      <form> 
        <Dropdown />
        <Radio />
        <Checkbox />
      </form>
    </div>
  )
}
