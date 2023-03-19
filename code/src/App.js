import Header from 'components/Header';
import SnacksArray from 'components/SnacksArray';
import ProgressButton from 'components/ProgressButton';
import TasteGroup from 'components/TasteGroup';
import TypeOfSnack from 'components/TypeOfSnack';
import React, { useState } from 'react';
import Texture from 'components/Texture';
import Flavor from 'components/Flavor';
import PriceSlider from 'components/PriceSlider';
import CommentOption from 'components/CommentOption';
import Results from 'components/Results';
import FinishButton from 'FinishButton';

export const App = () => {
  const [progress, setProgress] = useState(0);
  const [type, setType] = useState('');
  const [tasteGroup, setTasteGroup] = useState(SnacksArray[0].taste);
  const [texture, setTexture] = useState('');
  const [flavor, setFlavor] = useState('');
  const [priceValue, setPriceValue] = useState(7);
  const [comment, setComment] = useState('');
  const [textInput, setTextInput] = useState('');
  const [screenRender, setScreenRender] = useState(null)

  const handleReset = () => {
    setProgress(0);
    window.location.reload();
  }

  console.log({ progress })
  return (
    <>
      <Header />
      {progress < 1 && (
        <div className="introMsg">
          <h3>
      You&apos;ve reached a survey made by your local convenient store.
      We&apos;re about to stock our shelves with some new snacks and we&apos;d love to
      get your opinion on what to put on them. Thank you for your time!
            <p>-Here for you day & night, LocalMart</p>
          </h3>
        </div>
      )}
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
      {progress === 6 && <CommentOption
        tasteGroup={tasteGroup}
        type={type}
        texture={texture}
        flavor={flavor}
        priceValue={priceValue}
        comment={comment}
        setComment={setComment}
        textInput={textInput}
        setTextInput={setTextInput} />}
      {progress === 7 && <Results
        tasteGroup={tasteGroup}
        type={type}
        texture={texture}
        flavor={flavor}
        priceValue={priceValue}
        comment={comment}
        setComment={setComment}
        textInput={textInput}
        setTextInput={setTextInput} />}
      {progress <= 6 && <ProgressButton
        progress={progress}
        setProgress={setProgress}
        tasteGroup={tasteGroup}
        type={type}
        texture={texture}
        flavor={flavor}
        priceValue={priceValue} />}       {progress === 7 && <button type="button" onClick={handleReset}>Reset survey</button>}
      {progress === 7 && <FinishButton
        screenRender={screenRender}
        setScreenRender={setScreenRender} />}
      {progress > 0 && progress <= 6 && (<p>You are on step {progress} of 6 of the survey.</p>)}
    </>
  );
}

