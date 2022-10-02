import React from 'react';

const diagnosisGroups = [
  'Acne',
  'Menopause',
  'Andropause',
  'Cellulite'
]

console.log(diagnosisGroups)

const DiagnosisQuestion = ({ diagnosis, setDiagnosis }) => {
  const handleDiagnosisChange = (event) => {
    setDiagnosis(event.target.value)
  }

  return (
    <>
      <h2>What can we help you with?</h2>
      <form className="radio-buttons" id="radio-buttons">
        {diagnosisGroups.map((group) => (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label key={group}>
            <input
              type="radio"
              className="radio-button"
              value={group}
              onChange={handleDiagnosisChange}
              checked={diagnosis === group} />
            {group}
          </label>
        ))}
      </form>
    </>
  )
}
export default DiagnosisQuestion

