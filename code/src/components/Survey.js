import React from 'react';

import { TextQuestion } from './TextQuestion';
import { Select } from './Select';
import { Radio } from './Radio';
import { Checkbox } from './Checkbox';
import { Button } from './Button';
import { Summary } from './Summary';



export const Survey = () => {
  return (
    <>
      <TextQuestion />
      <Select />
      <Radio />
      <Checkbox />
      <Button />
      
    </>
  );
};