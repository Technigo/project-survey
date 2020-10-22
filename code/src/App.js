import React, { useState } from 'react'

import { Header } from 'components/Header';
import { Dropdown } from './components/Dropdown';
import { Radiobutton } from './components/Radiobutton';
import { Textinput } from './components/Textinput';
import { Checkbox } from './components/Checkbox';
import { Summary } from './components/Summary';
import { Button } from 'components/Button';
import AppCss from 'components/AppCss.css';



export const App = () => {

  const [name, setName] = useState('');
  const [timesPerWeek, setTimesPerWeek] = useState();
  const [sweet, setSweet] = useState();
  const [showSummary, setShowSummary] = useState(false);
  const [question, setQuestion] = useState('question1');
  {/*const [colors, setColors] = useStates([]);*/}

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };



  {/*const handleColorsChange = colorValue => {
    colors.includes(colorValue)
      ? setColors( colors.filter(item => item !== colorValue) )
  : setColors ( [...colors, colorValue] );*/}
  
  
  return ( 
    <>
      <Header
      />

      {!showSummary && (
      <form onSubmit={handleSubmit}>

        {/* if-statement, se ovan, visa textinput*/}

        <Textinput
          name={name}
          setName={setName}
        />

        <Radiobutton
          timesPerWeek={timesPerWeek}
          setTimesPerWeek={setTimesPerWeek}
        />

        <Dropdown
          sweet={sweet}
          setSweet={setSweet}
        />

        {/*<Checkbox 
          userColors={colors}
          onColorsChange={handleColorsChange}
        />*/}

        <Button />

      </form>
      )}

      {showSummary && (
        <Summary
          name={name}
          timesPerWeek={timesPerWeek}
          sweet={sweet} 
        />
      )}
    </>
  );
};

