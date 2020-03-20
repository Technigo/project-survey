import React from 'react'
import './paperEntry.css'

const papers = [
  'toilet paper',
  'paper towel',
  'tissue',
  'napkin',
  'serviette'
]

export const PaperEntry = ({paper, setPaper}) => {
  return (
    <form className="paper-entry">
      <h2>Preferred cupboard filler:</h2>
      {papers.map((chosePaper) => (
        <label key={chosePaper}>
          <input
            type="radio"
            value={chosePaper} 
            onChange={(event) => setPaper(event.target.value)}
            checked={paper === chosePaper}
          />
          {chosePaper}
        </label>
      ))}
    </form>
  );
};