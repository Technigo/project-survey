import React from 'react'

const QuestionTwoCountry = () => {
    return (
        <div>
           <p>Which country you want to travel to and spend 10 wonderful days?</p>
                <label htmlFor="france">France</label>
                <input id="france" type="radio" />
                <label htmlFor="iceland">Iceland</label>
                <input id="iceland" type="radio" />
                <label htmlFor="peru">Perú</label>
                <input id="peru" type="radio" />
                <label htmlFor="thailand">Thailand</label>
                <input id="thailand" type="radio" />
                <label htmlFor="australia">Australia</label>
                <input id="australia" type="radio" /> 
        </div>
    )
}

export default QuestionTwoCountry
