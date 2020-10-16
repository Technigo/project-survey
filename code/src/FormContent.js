import React, {useState} from 'react';
import { TextInput } from './TextInput';
import { Select } from './Select';
import { CheckBox } from './CheckBox';
import { RadioGroup } from './RadioGroup';

export const FormContent = () =>{
  return(
    <TextInput />
    <Select />
    <CheckBox />
    <RadioGroup />
  )
}