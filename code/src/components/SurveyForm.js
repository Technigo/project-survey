import React, {useState} from 'react'
import Age from './Age.js'
import Purpose from './Purpose.js'
import Expectations from './Expectations.js'
import Summary from './Summary.js'

const SurveyForm = () => {
const [ageGroup, setAgeGroup] = useState('')
const [options, setOptions] = useState ('Choose below')
const [expectations, setExpectations] = useState('')
const [slide, setSlide] = useState(1)
// const [summaryDisplay, setSummaryDisplay] = useState(false)

const nextSlide = () => {
    setSlide(slide + 1)
}
const backSlide = () => {
    setSlide(slide - 1)
}

    return (
      <div>
        <form>
            {slide === 1 && (
            <Age 
            ageGroup={ageGroup} 
            setAgeGroup={setAgeGroup}
            nextSlide={nextSlide}
            />
            )}
            {slide === 2 && (
            <Purpose
            options={options}
            setOptions={setOptions}
            nextSlide={nextSlide}
            backSlide={backSlide} 
            />
            )}
            {slide === 3 && (
            <Expectations
            expectations={expectations}
            setExpectations={setExpectations}
            nextSlide={nextSlide}
            backSlide={backSlide} 
            />
            )}
            {slide === 4 && (
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
