import React from 'react';

import Header from './Header';
import Intro from './Intro';
import Start from './Start';
import Form from './Form';
import DropDown from './DropDown';
import RadioButtons from './RadioButtons';
import InputText from './InputText';
import Submit from './Submit';
import Summary from './Summary';

export const App = () => {
  return (
    <div className="background">
      <Header />
      <Intro />
      <Start />
      <Form />
      <DropDown />
      <RadioButtons />
      <InputText />
      <Submit />
      <Summary />
    </div>
  )
}
