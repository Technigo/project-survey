import React, { useState } from 'react'


import { Header } from 'components/Header';
import { Dropdown } from './components/Dropdown';
import { Radiobutton } from './components/Radiobutton';
import { Textinput } from './components/Textinput';
import { Checkbox } from './components/Checkbox';
import { Summary } from './components/Summary';
import { Button } from 'components/Button';
import 'components/AppCss.css';



export const App = () => {

  const [name, setName] = useState('');
  const [timesPerWeek, setTimesPerWeek] = useState();
  const [sweet, setSweet] = useState();
  const [showSummary, setShowSummary] = useState(false);
  const [likes, setLikes] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };



  const handleLikesChange = likeValue => {
    likes.includes(likeValue)
       ? setLikes( likes.filter(item => item !== likeValue) )
       : setLikes ( [...likes, likeValue] );
  };
  
  
  return ( 
    <>
      <Header
      />

      {!showSummary && (
      <form onSubmit={handleSubmit}>

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

        <Checkbox 
           userLikes={likes} 
           onLikesChange={handleLikesChange}
        /> 

        <Button />

      </form>
      )}

      {showSummary && (
        <Summary
          name={name}
          timesPerWeek={timesPerWeek}
          sweet={sweet} 
          userLikes={likes}
        />
      )}
    </>
  );
};

