import react from 'react'

const interests = ["Adventure", "Beach", "History", "City-pulse", "Winter Sport",]

export const Radiobuttons = (props) => {

  const { interests, setinterests } = props

  return (
    <>
      <h2>What kind of holiday are you interested in?</h2>
      <section className="radio-button-container">
        {interests.map(option => (
          <label key={option} >{option}
            <input
              type="radio"
              value={option}
              onChange={event => setinterests(event.target.value)}
              checked={interests === option}
            />
          </label>
        ))}
      </section>
    </>
  )
}