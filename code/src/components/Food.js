/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */

import React from 'react';
import Question2Image from '../images/question2.jpg'

const Food = (props) => {
    const { food, setFood } = props
    // const { food, setFood, avocado, setAvocado, percentboop, setPercentbop } = props

    // const inputRef = useRef(null);

    const handleFoodChange = (event) => {
        setFood(event.target.value)
    }

    // const goToNextQuestion = () => {
    //     setAvocado(avocado + 1)
    //     setPercentbop(percentboop + 10)
    // }

    // const handleKeyDown = (event) => {
    //     if (event.keyCode === 13) {
    //       goToNextQuestion();
    //     }
    // };

    return (
        <div className="food-wrapper">
            <img
            className="question2-image"
            src={Question2Image}
            alt="q2" />
            <p>How many retail therapy purchases have you done with us?</p>
            <select
            className="question2"
            onChange={handleFoodChange}
            value={food}>
                <option value="">Select Location:</option>
                <option value="one">Only once (thus far!)</option>
                <option value="two">At least two times</option>
                <option value="3-5">3-5 times</option>
                <option value="5-20">5-20 times</option>
                <option value="more than 20">More than 20 times! take my MONEY 💸</option>
            </select>
            {/* <input
            type="text"
            value={food}
            ref={inputRef}
            onKeyDown={handleKeyDown}
            onChange={handleFoodChange} />
            {console.log(food)} */}
        </div>
    )
}

export default Food;