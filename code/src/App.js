import React, {useState} from 'react'
import {Input} from "./Input"
import {Checkbox} from "./Checkbox"
import {Dropdown} from "./Dropdown"
import {Buttons} from "./Buttons"
import {Radiobuttons} from "./Radiobuttons"
import {Rating} from "./Ratings"

export const App = () => {
  return (
    <div>
    <Input />
    <Checkbox />
    <Dropdown />
    <Buttons />
    <Radiobuttons />
    <Rating />
    </div>
  )
}