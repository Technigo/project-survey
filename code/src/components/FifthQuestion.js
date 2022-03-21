import React, { useEffect } from "react"

const rangeLength = { min: 0, max: 5 }

const FifthQuestion = (props) => {
    const {
        animalInput,
        onAnimalInputChange,
        partyAnimal,
        onSectionChangeBackward,
        onSectionChangeForward
    } = props

    const newRangeValue = Number((animalInput - rangeLength.min) * 100 / (rangeLength.max - rangeLength.min))
    const newPosition = 10 - (newRangeValue * 0.2)
    const bubblePosition = `calc(${newRangeValue}% + ${newPosition}px)`

    console.log('new range value is:', newRangeValue)
    console.log('new position is:', newPosition)
    console.log('bubble position is:', bubblePosition)

    useEffect(() => {
        const element = document.querySelector(".slider-bubble");
            if (element) {
                element.style.left = bubblePosition
            }
       
    })

    return (
        <div className="question-wrapper range-slider-page">

            <label className="page-title" htmlFor="animalInput">Alright, last but not least. Tell me, which animal is the biggest party animal?</label>
            
            <div className="range-slider-container">
               
                <div className="slider-bubble">
                    <span>
                    {partyAnimal}                       
                    </span>
                </div> 

                <input
                    id="animalInput"
                    type="range"
                    className="range"
                    min="0"
                    max="5"
                    step="1"
                    value={animalInput}
                    onChange={onAnimalInputChange}
                />

            </div>           

            <div className="button-wrapper">
                <button onClick={onSectionChangeBackward}>Back</button>
                <button onClick={onSectionChangeForward}>Results</button>
            </div>
           
        </div>
    )
}

export default FifthQuestion