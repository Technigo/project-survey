

import React, {useState} from 'react';
import { Radio } from './components/Radio';
import { SingleLine } from './components/SingleLine';
import { Select } from './components/Select';

export const App = () => {

  return (
  <div>Survey!
    <SingleLine></SingleLine>
    <Select></Select>
    <Radio></Radio>
  </div>

  );
};


export default App
