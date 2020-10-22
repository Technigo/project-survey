import React from 'react'

export const Factors = (props) => {
  const { factor, setFactor } = props
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
      Which factor most influences your buying decision when purchasing Thing?
      {factors.map(decisionMaker => (
        <p key={decisionMaker}>
        <label className="answerOption">
          <input 
            type="radio"
            value={decisionMaker}
            onChange={event => setFactor(event.target.value)}
            checked={factor === decisionMaker}
          />
            &nbsp;
          {decisionMaker}
        </label>
      </p>
      ))}
    </div>
  )
}