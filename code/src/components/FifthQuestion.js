import React, { useEffect } from "react"

const rangeLength = { min: 0, max: 5 }

const FifthQuestion = (props) => {
    const {
        emojiInput,
        onEmojiInputChange,
        mood,
        onSectionChangeBackward,
        onSectionChangeForward
    } = props

    const newRangeValue = Number((emojiInput - rangeLength.min) * 100 / (rangeLength.max - rangeLength.min))
    const newPosition = 10 - (newRangeValue * 0.2)
    const bubblePosition = `calc(${newRangeValue}% + ${newPosition}px)`

    useEffect(() => {
        const element = document.querySelector(".slider-bubble");
            if (element) {
                element.style.left = bubblePosition
            }
    })

    return (
        <div className="question-wrapper range-slider-page">

            <label className="page-title" htmlFor="emojiInput">
                Alright, last but not least. Tell me, which animal is the biggest party animal?
            </label>
            
            <div className="range-slider-container">
               
                <div className="slider-bubble">
                    <span>
                    {mood}                       
                    </span>
                </div> 

                <input
                    id="emojiInput"
                    type="range"
                    className="range"
                    min="0"
                    max="5"
                    step="1"
                    value={emojiInput}
                    onChange={onEmojiInputChange}
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