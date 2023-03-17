import React from 'react';

const clothing = [
  'gloves',
  'hat',
  'sunglasses',
  'mankini',
  'kimono',
  'mittens',
  'flip flops',
  'wedding dress',
  'smoking',
  'wetsuit',
  'PJs'

];

export const FourthQuestion = ({ clothingNoun, setClothingNoun }) => {
  const handleFourthAnswer = (event) => {
    setClothingNoun(event.target.value);
  }
  return (
    <form className="radio-btn-container" onSubmit={(event) => event.preventDefault()}>
      <p className="instructionText"> Pick a piece of clothing or accessory!</p>
      {clothing.map((group) => (
        <label aria-label="select button" className="radio-button" key={group} htmlFor="piece-of-clothing">
          <input
            type="radio"
            value={group}
            onChange={handleFourthAnswer}
            checked={clothingNoun === group} />
          {group}
        </label>
      ))}
    </form>
  )
}