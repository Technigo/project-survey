import React from 'react'

export const Radio = (props) => {
  const { frequency, setFrequency } = props

  const recur = [
    'Never',
    'A few times a year',
    'Once a month',
    'A few times a month',
    'More than twice a month'
  ]

  return (
    <div className="question">
        How often do you buy Thing?
          {recur.map((occur) => (
            <p>
              <label key={occur} className="answerOption">
                <input 
                  type="radio"
                  value={recur}
                  onChange={(event) => setFrequency(event.target.value)} 
                  checked={frequency === occur}
                />
                &nbsp;
              {occur}
              </label>
            </p>
          ))}
    </div>
  )
}