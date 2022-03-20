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

const nextSlide = () => {
    setSlide(slide + 1)
}
const backSlide = () => {
    setSlide(slide - 1)
}
//Rendering all components 
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
            <Summary 
            ageGroup={ageGroup}
            options={options}
            expectations={expectations}
                />
            )}
        </form>
      </div>
    )
}

export default SurveyForm
