import React from 'react';

import Header from 'components/Header.js';

import Form from './components/Form';



export const App = () => {

  return (
    <>
      <div>
        <Header 
        backgroundColor="#F0A8C5"
        color="#D5484F" 
        title="Today's survey" 
        headerAccessory="white"
        anotherHeaderAccessory="orange"
        />
      </div>
      <div>
        <Form />
      </div>
    </>
    
  )
}

