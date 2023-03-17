import React from 'react'

export const Selector = ({ milk, selector, setSelector }) => {
  const handleSelector = (event) => {
    setSelector(event.target.value);
  }
  return (
    <div className="selector">
      <p>What kind of {milk} are you? </p>
      <input type="text" value={selector} onChange={handleSelector} />
    </div>
  );
}

/* <p>What´s your Zodiac sign?</p>

<select id="mySelect" onchange="myFunction()">
  <option value="Aries">Aries</option>
  <option value="Taurus">Taurus</option>
  <option value="Gemini">Gemini</option>
  <option value="Cancer">Cancer</option>
  <option value="Leo">Leo</option>
  <option value="Virgo">Virgo</option>
  <option value="Libra">Libra</option>
  <option value="Scorpio">Scorpio</option>
  <option value="Sagittarius">Sagittarius</option>
  <option value="Capricorn">Capricorn</option>
  <option value="Aquarius">Aquarius</option>
  <option value="Pisces">Pisces</option>
</select> */