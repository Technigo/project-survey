import Header from 'components/Header';
import ProgressButton from 'components/ProgressButton';
import TasteGroup from 'components/TasteGroup';
import TypeOfSnack from 'components/TypeOfSnack';
import React, { useState } from 'react';
import Texture from 'components/Texture';
import Flavor from 'components/Flavor';
import PriceSlider from 'components/PriceSlider';
import ImportantOption from 'components/ImportantOption';
import Results from 'components/Results';

export const App = () => {
  const [progress, setProgress] = useState(0);
  const [type, setType] = useState('')
  const [tasteGroup, setTasteGroup] = useState('');
  const [texture, setTexture] = useState('');
  const [flavor, setFlavor] = useState('');
  const [priceValue, setPriceValue] = useState(4);
  const [importantValue, setimportantValue] = useState('');

  console.log({ progress })
  return (
    <>
      <Header />
      {progress < 1 && (<h3>Hello</h3>)}
      {progress === 1 && <TasteGroup tasteGroup={tasteGroup} setTasteGroup={setTasteGroup} />}
      {progress === 2 && <TypeOfSnack tasteGroup={tasteGroup} type={type} setType={setType} />}
      {progress === 3 && <Texture
        tasteGroup={tasteGroup}
        type={type}
        texture={texture}
        setTexture={setTexture} />}
      {progress === 4 && <Flavor
        tasteGroup={tasteGroup}
        type={type}
        texture={texture}
        flavor={flavor}
        setFlavor={setFlavor} />}
      {progress === 5 && <PriceSlider priceValue={priceValue} setPriceValue={setPriceValue} />}
      {progress === 6
      && <ImportantOption importantValue={importantValue} setimportantValue={setimportantValue} />}
      {progress === 7 && <Results
        tasteGroup={tasteGroup}
        type={type}
        texture={texture}
        flavor={flavor}
        priceValue={priceValue}
        importantValue={importantValue} />}
      <ProgressButton
        progress={progress}
        setProgress={setProgress}
        tasteGroup={tasteGroup}
        type={type}
        texture={texture}
        flavor={flavor}
        priceValue={priceValue}
        importantValue={importantValue} />
      {progress > 1 && (<p>You are on step {progress} of the survey. Cool, right?</p>)}
    </>
  );
}

