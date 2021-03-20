import React from 'react';

const recomendationAnswer = ['Yes', 'No'];

const RadioButtonsRecommends = (props) => {

    return (
        <div>
            <p>Would you recommend the book to someone else?</p>
            {recomendationAnswer.map((answer) => (
                <label htmlFor="books" key={answer}>
                    <input
                        id="books"
                        type="radio"
                        value={answer}
                        onChange={props.onrecomendationChange}
                        checked={props.recomendation === answer}
                    />
                    {answer}
                </label>
            ))}
        </div>
    );
};

export default RadioButtonsRecommends;