import React from 'react';
import { Name } from './Components/Name';
import { Select } from './Components/Select';
import { Checkbox } from './Components/Checkbox';
import { Radiobuttons } from './Components/Radiobuttons';

export const App = () => {
  return (
    <div>
      <Name />
      <Select />
      <Checkbox />
      <Radiobuttons />
    </div>
  );
}
