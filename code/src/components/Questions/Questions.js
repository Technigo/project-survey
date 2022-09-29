import React, { useState } from 'react';
import DropdownSides from 'components/Dropdown/DropdownSides';
import InputField from 'components/InputField/InputField';
import Dropdown from 'components/Dropdown/Dropdown'
import End from 'components/End/End';
import RadioProtein from 'components/Radio/RadioProtein';
import RadioCarbs from 'components/Radio/RadioCarbs';
import RadioMeat from 'components/Radio/RadioMeat';
import RadioFish from 'components/Radio/RadioFish';
import RadioVegetarian from 'components/Radio/RadioVegetarian';

const Questions = (props) => {
  const [question, setQuestion] = useState(1);
  const [selected, setSelected] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('')
  const [meat, setMeat] = useState('');
  const [fish, setFish] = useState('');
  const [selectedSides, setSelectedSides] = useState('');
  const [text, inputText] = useState('');
  const [vegetarian, setVegetarian] = useState('');

  const nextQuestion = () => {
    setQuestion(question + 1);
  };
  const previousQuestion = () => {
    setQuestion(question - 1);
  };

  return (
    <div className="main-container">
      {question === 1 && (
        <div className={Questions}>
          <h1>Question 1</h1>
          <h2>On a scale from 1 to 10, how hungry are you currently?</h2>
          <Dropdown
            selected={selected}
            setSelected={setSelected} />
          <button type="button" onClick={nextQuestion}>
            Next
          </button>
        </div>
      )}
      {question === 2 && (
        <div className={Questions}>
          <h1>Question 2</h1>
          <h2>Which protein are you feeling like today?</h2>
          <RadioProtein
            protein={protein}
            setProtein={setProtein} />
          {protein === 'Fish' && <RadioFish
            fish={fish}
            setFish={setFish} />}
          {protein === 'Meat' && <RadioMeat
            meat={meat}
            setMeat={setMeat} />}
          {protein === 'Vegetarian' && <RadioVegetarian
            vegetarian={vegetarian}
            setVegetarian={setVegetarian} />}
          <button type="button" onClick={nextQuestion}>
          Next
          </button>
          <button type="button" onClick={previousQuestion}>
          Back
          </button>
        </div>
      )}
      {question === 3 && (
        <div className={Questions}>
          <h1>Question 3</h1>
          <h2>What about carbs?</h2>
          <RadioCarbs
            carbs={carbs}
            setCarbs={setCarbs} />
          <button type="button" onClick={nextQuestion}>
            Next
          </button>
          <button type="button" onClick={previousQuestion}>
            Back
          </button>
        </div>
      )}
      {question === 4 && (
        <div className={Questions}>
          <h1>Question 4</h1>
          <h2>Any sides perhaps?</h2>
          <DropdownSides
            selectedSides={selectedSides}
            setSelectedSides={setSelectedSides} />
          <h3>If there is anything you would like to add, please do so here:</h3>
          <InputField
            text={text}
            inputText={inputText} />
          <button type="button" onClick={props.nextPage}>
            Next
          </button>
          <button type="button" onClick={previousQuestion}>
            Back
          </button>
        </div>
      )}
      {question === 5 && (
        <End />
      )}
    </div>
  );
};

export default Questions;