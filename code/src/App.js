import Header from 'components/Header';
import ProgressButton from 'components/ProgressButton';
import TasteGroup from 'components/TasteGroup';
import TypeOfSnack from 'components/TypeOfSnack';
import TextureSavorySalty from 'components/TextureSavorySalty';
import React, { useState } from 'react';
import TextureSweetSour from 'components/TextureSweetSour';

export const App = () => {
  const [progress, setProgress] = useState(0);
  const [type, setType] = useState('')
  const [tasteGroup, setTasteGroup] = useState('');
  const [texture, setTexture] = useState('');
  console.log({ progress })
  return (
    <>
      <Header />
      {progress < 1 && (<h3>Hello</h3>)}
      {progress === 1 && <TasteGroup tasteGroup={tasteGroup} setTasteGroup={setTasteGroup} />}
      {progress === 2 && <TypeOfSnack tasteGroup={tasteGroup} type={type} setType={setType} />}
      {progress === 3 && ((tasteGroup === 'Sweet' || (tasteGroup === 'Sour') ? <TextureSweetSour tasteGroup={tasteGroup} texture={texture} setTexture={setTexture} /> : null))}
      {progress === 3 && ((tasteGroup === 'Savory') || (tasteGroup === 'Salty') ? <TextureSavorySalty tasteGroup={tasteGroup} texture={texture} setTexture={setTexture} /> : null)}
      <ProgressButton progress={progress} setProgress={setProgress} />
      {progress > 1 && (<p>You are on step {progress} of the survey. Cool, right?</p>)}
    </>
  );
}

