import React from 'react'

export const Checkbox = ({ userValues, onFactorChange }) => {
  const factors = [
      'Natural Ingredients',
      'Eco-friendly',
      'Exclusiveness',
      'Locally sourced materials',
      'Locally produced',
      'Handmade',
      'Supporting small businesses',
      'Attractive packaging',
      'Brand name',
      'Price'
    ]

  return (
    <div className="question">
      Which 3 factors most influence your buying decision?
      {factors.map(factor=> (
        <p key={factor}>
        <label className="answerOption">
          <input 
            type="checkbox"
            id={factor}
            onChange={() => onFactorChange({factor})}
            checked={userValues.includes({factor})}
          />
            &nbsp;
          {factor}
        </label>
      </p>
      ))}
    </div>
  )
}

// needs to allow multiple (up to 3) selection