/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Name } from 'components/Name';
import { Gender } from 'components/Gender';
import { Age } from 'components/Age';
import { Food } from 'components/Food';
import { Times } from 'components/Times';

export const App = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [food, setFood] = useState('');
  const [times, setTimes] = useState('');

  return (
    <>
      <Name />
      <Gender />
      <Age age={age} setAge={setAge} />
      <Food />
      <Times times={times} setTimes={setTimes} />
    </>

  );
}
