/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */

import React from 'react';
import Question2Image from '../images/question2.jpg'

const Purchases = (props) => {
    const { purchases, setPurchases } = props
    // const { food, setFood, avocado, setAvocado, percentboop, setPercentbop } = props

    // const inputRef = useRef(null);

    const handlePurchasesChange = (event) => {
        setPurchases(event.target.value)
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
            onChange={handlePurchasesChange}
            value={purchases}>
                <option value="">Select option:</option>
                <option value="ounce">Only once (thus far!)</option>
                <option value="twice">At least two times</option>
                <option value="3-5 times">3-5 times</option>
                <option value="5-20 times">5-20 times</option>
                <option value="more than 20 times">More than 20 times! take my MONEY ◝(ᵔᵕᵔ)◜</option>
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

export default Purchases;