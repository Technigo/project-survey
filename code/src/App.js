import React from 'react'

import { Header } from './components/Header'
import { Form } from './components/Form'

export const App = () => {
/*const [name, setName] = useState('');
const [color, setColor] = useState('');
const [country, setCountry] = useState('');

/*const isSurveyComplete = () => {
  if (name === "") {
    return false;
  }

  if (color === "") {
    return false;
  }

  if (country === "") {
    return false;
  }

  return true;
};*/


  return (
    <>
    
      <Header/>
      <Form/>
   
    </>
  )
}
