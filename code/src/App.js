import React from 'react'
import {Dropdown} from './Dropdown'
import {Radio} from './Radio'
import {Checkbox} from './Checkbox'
import {Submit} from "./Submit"


export const App = () => {
  return (
    <div>
      <form> 
        <Dropdown />
        <Radio />
        <Checkbox />
        <Submit />
      </form>
    </div>
  )
}
