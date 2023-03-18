import React from 'react'

export const ZodiacSign = ({ sign, setSign }) => {
/* const handleZodiacSignChange = (event) => {
    setSign(event.target.value);
  } */

  return (
    <div className="colour-container">
      <h2> What&apos;s your zodiac?</h2>
      <form className="zodiacForm">
        <select
          onChange={(event) => setSign(event.target.value)}
          value={sign}>
          <option value="" disabled>Choose Zodiac sign</option>
          <option value="pisces">Pisces</option>
          <option value="pink">Pink</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="Black">Black</option>
        </select>
      </form>
      {sign && (
        <p>Okey, so you&apos;re a  {sign}, cool!</p>
      )}
    </div>
  )
}
/* return (
    <div className="zodiac-container">
      <h2>Select your Zodiac Sign:</h2>
      <form>

      </form>

    </div>
  );
} */
/* NR 2 */

/* {zodiacSigns.map((signselector) => (
          <div key={signselector}>
            <div className="signs">
  <input type="radio" id={signselector} name="zodiac-sign" value={signselector}
   onChange={handleZodiacSignChange} checked={sign === signselector} />
              <label htmlFor={signselector}>{signselector}</label>
            </div>
          </div>
        ))} */
/* const zodiacSigns = [
          'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
          'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
        ]; */