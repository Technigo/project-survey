import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

setGlobal({
  gender: '',
  frequency: '',
  action1: '',
  action2: '',
  suggestion: false
});

ReactDOM.render(<App />, document.getElementById('root'));
