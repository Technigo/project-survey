/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Survey from './Survey';
import Range, { ratingText } from './Range';
import RadioGroup from './Radio';
import Name from './Name';
import Weapon from './Weapon';
import Quest from './Quest';

const SurveyForm = ({
  name,
  onNameChange,
  radioGroup,
  onRadioGroupChange,
  weapon,
  onWeaponChange,
  quest,
  onQuestChange,
  volume,
  onVolumeChange,
  onSubmit
}) => {
  return (
    <form className="form-container" onSubmit={onSubmit}>
      <Name name={name} onNameChange={onNameChange} />

      <RadioGroup onRadioChange={onRadioGroupChange} radioGroup={radioGroup} />

      <Weapon weapon={weapon} onWeaponChange={onWeaponChange} />

      <Quest quest={quest} onQuestChange={onQuestChange} />

      <Range volume={volume} onVolumeChange={onVolumeChange} />

      <button className="submit-button">Submit!</button>
    </form>
  );
};

const Form = () => {
  const [name, setName] = useState('');
  const [radioGroup, setRadioGroup] = useState('');
  const [weapon, setWeapon] = useState('');
  const [quest, setQuest] = useState('');
  const [volume, setVolume] = useState(3);
  const [surveyComplete, setSurveyComplete] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSurveyComplete(true);
  };

  if (surveyComplete) {
    return (
      <div>
        <header className="header">
          <h1 className="header-name">Adventure Awaits!</h1>
        </header>
        <Survey
          name={name}
          radioGroup={radioGroup}
          weapon={weapon}
          quest={quest}
          volume={ratingText[volume]} />
      </div>
    );
  } else {
    return (
      <div>
        <header className="header">
          <h1 className="header-name">Adventure Awaits!</h1>
        </header>
        <SurveyForm
          name={name}
          onNameChange={(event) => setName(event.target.value)}
          radioGroup={radioGroup}
          onRadioGroupChange={(event) => setRadioGroup(event.target.value)}
          weapon={weapon}
          onWeaponChange={(event) => setWeapon(event.target.value)}
          quest={quest}
          onQuestChange={(event) => setQuest(event.target.value)}
          volume={volume}
          onVolumeChange={(event) => setVolume(event.target.value)}
          onSubmit={handleSubmit} />
      </div>
    );
  }
};

export default Form;
