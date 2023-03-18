/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Summary from './Summary';
import Range, { ratingText } from './Range';
import RaceGroup from './Race';
import Name from './Name';
import Weapon from './Weapon';
import Quest from './Quest';

const SummaryForm = ({
  name,
  onNameChange,
  raceGroup,
  onRaceGroupChange,
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

      <RaceGroup onRaceChange={onRaceGroupChange} raceGroup={raceGroup} />

      <Weapon weapon={weapon} onWeaponChange={onWeaponChange} />

      <Quest quest={quest} onQuestChange={onQuestChange} />

      <Range volume={volume} onVolumeChange={onVolumeChange} />

      <button className="submit-button">Submit!</button>
    </form>
  );
};

const Form = () => {
  const [name, setName] = useState('');
  const [raceGroup, setRaceGroup] = useState('');
  const [weapon, setWeapon] = useState('');
  const [quest, setQuest] = useState('');
  const [volume, setVolume] = useState(3);
  const [summaryComplete, setSummaryComplete] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSummaryComplete(true);
  };

  if (summaryComplete) {
    return (
      <div>
        <header className="header">
          <h1 className="header-name">Adventure Awaits!</h1>
        </header>
        <Summary
          name={name}
          raceGroup={raceGroup}
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
        <SummaryForm
          name={name}
          onNameChange={(event) => setName(event.target.value)}
          raceGroup={raceGroup}
          onRaceGroupChange={(event) => setRaceGroup(event.target.value)}
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
