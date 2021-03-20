import React from 'react';

const recomendationAnswer = ['Yes', 'No'];

const RadioButtonsRecomends = (props) => {

    return (
        <div>
            <p>Would you recomend the book to someone else?</p>
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

export default RadioButtonsRecomends;