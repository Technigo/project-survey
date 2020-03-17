import React, {useState} from 'react';
import { Radio } from './components/Radio';
import { Text } from './components/Text';
import { Select } from './components/Select';
import { Submit } from './components/Submit';
import { Response } from './components/Response';
import { Checkbox } from './components/Checkbox';


export const App = () => {

  return (
  <article>Survey!
    <Text></Text>
    <Checkbox></Checkbox>
    <Select></Select>
    <Radio></Radio>
    <Submit></Submit>
    <Response></Response>
  </article>

  );
};



