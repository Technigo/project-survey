import React, {useState} from 'react'
import Start from './Start.js'
import Age from './Age.js'
import Purpose from './Purpose.js'
import Expectations from './Expectations.js'
import Summary from './Summary.js'

const SurveyForm = () => {
const [ageGroup, setAgeGroup] = useState('')
const [options, setOptions] = useState ('choose below')
const [expectations, setExpectations] = useState('')
const [slide, setSlide] = useState(1)
// const [error, setError] = useState('')
// const [summaryDisplay, setSummaryDisplay] = useState(false)

const nextSlide = () => {
    setSlide(slide + 1)
    // if (slide===2 && ageGroup==='') {
    //     setError('Please fill in the required fields')
    //     setSlide(2)
    // }
    // else {
    //     setError('')
    //     setSlide(slide + 1)
    // }
}
const backSlide = () => {
    setSlide(slide - 1)
}

    return (
      <div>
        <form>
            {slide === 1 && (
            <Start nextSlide={nextSlide} />
            )}
            {slide === 2 && (
            <Age 
            ageGroup={ageGroup} 
            setAgeGroup={setAgeGroup}
            nextSlide={nextSlide}
            backSlide={backSlide} 
            // error={error}
            />
            )}
            {slide === 3 && (
            <Purpose
            options={options}
            setOptions={setOptions}
            nextSlide={nextSlide}
            backSlide={backSlide} 
            />
            )}
            {slide === 4 && (
            <Expectations
            expectations={expectations}
            setExpectations={setExpectations}
            nextSlide={nextSlide}
            backSlide={backSlide} 
            />
            )}
            {slide === 5 && (
            // <button onClick={()=> setSummaryDisplay(true)}>Submit</button>
            // {summaryDisplay && (
            <Summary 
            ageGroup={ageGroup}
            options={options}
            expectations={expectations}
                />
            // )}
            )}
        </form>
      </div>
    )
}

export default SurveyForm
