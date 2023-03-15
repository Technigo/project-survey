import React from 'react';

const clothing = [
  'gloves',
  'hat',
  'sunglasses',
  'mankini',
  'kimono'
];

export const FourthQuestion = ({ clothingNoun, setClothingNoun }) => {
  const handleFourthAnswer = (event) => {
    setClothingNoun(event.target.value);
  }
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {clothing.map((group) => (
        <label key={group} htmlFor="piece-of-clothing">
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