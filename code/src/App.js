import React, { useState } from 'react';

import Header from 'components/Header.js';

import Form from './components/Form';


export const App = () => {

  return (
    <>
      <div>
        <Header 
        backgroundColor="#F0A8C5"
        color="#F0A8C5" 
        title="Today's survey" 
        imgsrc="url(../grumpy-cat.jpg)"/>
      </div>
      <div>
        <Form />
      </div>
    </>
    
  )
}

