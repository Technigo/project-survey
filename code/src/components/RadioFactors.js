import React from 'react'

export const Factors = (props) => {
  const { factor, setFactor } = props
  const factors = [
      'Made from natural ingredients',
      'Eco-friendly',
      'Exclusive',
      'A conversation starter',
      'Made from locally sourced materials',
      'Locally produced',
      'Handmade',
      'Supports a small business',
      'Has attractive packaging',
      'Has minimal packaging',
      'Has packaging that is reusable',
      'Made by a recognised brand name',
      'Within budget'
    ]

  return (
    <div className="question">
      When considering whether to buy Thing, which factor is most important to you?
      {factors.map(decisionMaker => (
        <p key={decisionMaker}>
        <label className="answerOption" htmlFor={decisionMaker}>
          <input 
            type="radio"
            value={decisionMaker}
            onChange={event => setFactor(event.target.value)}
            checked={factor === decisionMaker}
            tabIndex="0"
            className="focusable"
          />
            &nbsp;
          {decisionMaker}
        </label>
      </p>
      ))}
    </div>
  )
}