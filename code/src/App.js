import React from 'react';
import { Gender } from './Gender';
import { Frequency } from './Frequency';
import { Selfhelp } from './Actions';
import { Suggestions } from './Suggestions';
import { Checkbox } from './Test';

export const App = () => {
  return (
    <div className="form">
      <Gender />
      <Frequency />
      <Selfhelp />
      <Suggestions />
    </div>

  );
};

export default App;
