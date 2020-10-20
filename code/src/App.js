import React from 'react'
import {Dropdown} from './Dropdown'
import {Radio} from './Radio'
import {Checkbox} from './Checkbox'
import {Submit} from './Submit'
import {Input} from './Input'
import {Summary} from './Summary'


export const App = () => {
  return (
    <div className="formContainer">
      <form> 
        <Dropdown />
        <Radio />
        <Input />
        <Checkbox />
        <Submit />
      </form>
    </div>
    
  )
}
