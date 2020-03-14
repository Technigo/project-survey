import React from 'react';
import { Gender } from './Gender';
import { Frequency } from './Frequency';
import { Actions } from './Actions';
import { Suggestions } from './Suggestions';
import { Checkbox } from './Test';

export const App = () => {
  return (
    <div>
      <Gender />
      <Frequency />
      <Actions />
      <Suggestions />

    </div>
  );
};

export default App;
