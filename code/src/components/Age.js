import React from 'react'

const Age = ({ ageGroup, setAgeGroup, nextSlide, backSlide }) => {
  const ageSelectors = ['0-20', '21-40', '41-60', '60+']

    return (
     <section>
      <div className='form-container'>
        <h2>Select your age</h2>
        {ageSelectors.map(group => (
        <label key={group} htmlFor='age'>
        <input 
          id='age'
          type='radio'
          value={group}
          onChange={(event) => {setAgeGroup(event.target.value)}}
          checked={ageGroup === group}
        />
        {group}
        </label>
        ))}
        <div className='button-container'>
          <button className='button' onClick={backSlide}>
            back
          </button>
          <button className="button"
          disabled={ageGroup === ""}
          onClick={nextSlide}
          >
            next
          </button>
          {/* {error!=='' && <p>{error}</p>} */}
        </div>
      </div>
     </section> 
    )
}

    export default Age
