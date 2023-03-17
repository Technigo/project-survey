import React from 'react'

export const ZodiacSign = ({ sign, setSign }) => {
  const handleZodiacSignChange = (event) => {
    setSign(event.target.value);
  }

  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];
  return (
    <div className="zodiac-container">
      <h2>Select your Zodiac Sign:</h2>
      <form>
        {zodiacSigns.map((signselector) => (
          <div key={signselector}>
            <div className="signs">
              <input type="radio" id={signselector} name="zodiac-sign" value={signselector} onChange={handleZodiacSignChange} checked={sign === signselector} />
              <label htmlFor={signselector}>{signselector}</label>
            </div>
          </div>
        ))}
      </form>
      {sign && (
        <p>Okey, so you´re a  {sign}, cool!</p>
      )}
    </div>
  );
}
/* NR 2 */