/* eslint-disable react/no-unescaped-entities */
import Header from 'components/Header';

import ProgressButton from 'components/ProgressButton';
import TasteGroup from 'components/TasteGroup';
import TypeOfSnack from 'components/TypeOfSnack';
import React, { useState } from 'react';
import Texture from 'components/Texture';
import Flavor from 'components/Flavor';
import PriceSlider from 'components/PriceSlider';
import CommentOption from 'components/CommentOption';
import ImportantOption from 'components/ImportantOption';
import Results from 'components/Results';
import FinishButton from 'FinishButton';

export const App = () => {
  const [progress, setProgress] = useState(0);
  const [isChoiceMade, setIsChoiceMade] = useState(false)
  const [type, setType] = useState('');
  const [tasteGroup, setTasteGroup] = useState('');
  const [texture, setTexture] = useState('');
  const [flavor, setFlavor] = useState('');
  const [priceValue, setPriceValue] = useState(7);
  const [comment, setComment] = useState('');
  const [textInput, setTextInput] = useState('');
  const [importantValue, setImportantValue] = useState('');
  const [screenRender, setScreenRender] = useState(null)
  const [showProgressButton, setShowProgressButton] = useState(false);

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
      {progress === 1 && <TasteGroup
        tasteGroup={tasteGroup}
        setTasteGroup={setTasteGroup}
        progress={progress}
        setProgress={setProgress}
        showProgressButton={showProgressButton}
        setShowProgressButton={setShowProgressButton} />}
      {progress === 2 && <TypeOfSnack
        isChoiceMade={isChoiceMade}
        setIsChoiceMade={setIsChoiceMade}
        tasteGroup={tasteGroup}
        type={type}
        setType={setType}
        progress={progress}
        setProgress={setProgress}
        showProgressButton={showProgressButton}
        setShowProgressButton={setShowProgressButton} />}
      {progress === 3 && <Texture
        tasteGroup={tasteGroup}
        type={type}
        texture={texture}
        setTexture={setTexture}
        progress={progress}
        setProgress={setProgress}
        setIsChoiceMade={setIsChoiceMade}
        showProgressButton={showProgressButton}
        setShowProgressButton={setShowProgressButton} />}
      {progress === 4 && <Flavor
        tasteGroup={tasteGroup}
        type={type}
        texture={texture}
        flavor={flavor}
        setFlavor={setFlavor}
        progress={progress}
        setProgress={setProgress}
        showProgressButton={showProgressButton}
        setShowProgressButton={setShowProgressButton} />}
      {progress === 5 && <PriceSlider
        priceValue={priceValue}
        setPriceValue={setPriceValue} />}
      {progress === 6 && <CommentOption
        tasteGroup={tasteGroup}
        type={type}
        texture={texture}
        flavor={flavor}
        priceValue={priceValue}
        comment={comment}
        setComment={setComment}
        textInput={textInput}
        setTextInput={setTextInput}
        progress={progress}
        setProgress={setProgress}
        showProgressButton={showProgressButton}
        setShowProgressButton={setShowProgressButton} />}
      {progress === 7 && <ImportantOption
        importantValue={importantValue}
        setImportantValue={setImportantValue} />}
      {progress === 8 && <Results
        tasteGroup={tasteGroup}
        type={type}
        texture={texture}
        flavor={flavor}
        priceValue={priceValue}
        comment={comment}
        setComment={setComment}
        textInput={textInput}
        setTextInput={setTextInput} />}
      {progress === 0 || progress === 5 ? (
        console.log('ProgressButton mounted'),
        <ProgressButton
          progress={progress}
          setProgress={setProgress}
          isChoiceMade={isChoiceMade}
          setIsChoiceMade={setIsChoiceMade}
          tasteGroup={tasteGroup}
          type={type}
          texture={texture}
          flavor={flavor}
          priceValue={priceValue} />) : null}
      {progress === 8 && <button type="button" onClick={handleReset}>Reset survey</button>}
      {progress === 8 && <FinishButton
        screenRender={screenRender}
        setScreenRender={setScreenRender} />}
      {progress > 0 && progress <= 7 && (<p>You are on step {progress} of 7 of the survey</p>)}
    </>
  );
}

