import React, { useState } from 'react';
import DropdownSides from 'components/Dropdown/DropdownSides';
import InputField from 'components/InputField/InputField';
import Dropdown from 'components/Dropdown/Dropdown'
import RadioProtein from 'components/Radio/RadioProtein';
import RadioCarbs from 'components/Radio/RadioCarbs';
import RadioMeat from 'components/Radio/RadioMeat';
import RadioFish from 'components/Radio/RadioFish';
import RadioVegetarian from 'components/Radio/RadioVegetarian';

export const Questions = (props) => {
  const [question, setQuestion] = useState(1);

  const nextQuestion = () => {
    setQuestion(question + 1);
  };
  const previousQuestion = () => {
    setQuestion(question - 1);
  };

  return (
    <div className="main-container">
      {question === 1 && (
        <div className="questions">
          <h1>Question 1</h1>
          <h2>On a scale from 1 to 10, how hungry are you currently?</h2>
          <Dropdown
            selected={props.selected}
            setSelected={props.setSelected} />
          <button type="button" onClick={nextQuestion}>
            Next
          </button>
        </div>
      )}
      {question === 2 && (
        <div className="questions">
          <h1>Question 2</h1>
          <h2>Which protein are you feeling like today?</h2>
          <RadioProtein
            protein={props.protein}
            setProtein={props.setProtein} />
          {props.protein === 'fish' && <RadioFish
            fish={props.fish}
            setFish={props.setFish} />}
          {props.protein === 'meat' && <RadioMeat
            meat={props.meat}
            setMeat={props.setMeat} />}
          {props.protein === 'vegetarian' && <RadioVegetarian
            vegetarian={props.vegetarian}
            setVegetarian={props.setVegetarian} />}
          <button type="button" onClick={nextQuestion}>
          Next
          </button>
          <button type="button" onClick={previousQuestion}>
          Back
          </button>
        </div>
      )}
      {question === 3 && (
        <div className="questions">
          <h1>Question 3</h1>
          <h2>What about carbs?</h2>
          <RadioCarbs
            carbs={props.carbs}
            setCarbs={props.setCarbs} />
          <button type="button" onClick={nextQuestion}>
            Next
          </button>
          <button type="button" onClick={previousQuestion}>
            Back
          </button>
        </div>
      )}
      {question === 4 && (
        <div className="questions">
          <h1>Question 4</h1>
          <h2>Any sides perhaps?</h2>
          <DropdownSides
            selectedSides={props.selectedSides}
            setSelectedSides={props.setSelectedSides} />
          <h3>If there is anything you would like to add, please do so here:</h3>
          <InputField
            text={props.text}
            inputText={props.inputText} />
          <button type="button" onClick={props.nextPage}>
            Next
          </button>
          <button type="button" onClick={previousQuestion}>
            Back
          </button>
        </div>
      )}
    </div>
  );
};