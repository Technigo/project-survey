import React from 'react';

const recommendationAnswer = ['Yes', 'No'];

const RadioButtonsRecommends = (props) => {
    return (
        <div className="radio-container">
            <p>Would you recommend the book to someone else?</p>
            <div className="radio-buttons-container">
                {recommendationAnswer.map((answer) => (
                    <label
                        htmlFor="books"
                        key={answer}
                    >
                        <input
                            id="books"
                            type="radio"
                            value={answer}
                            onChange={props.onRecommendationChange}
                            checked={props.recommendation === answer}
                        />
                        {answer}
                    </label>
                ))};
            </div>
        </div>
    );
};

export default RadioButtonsRecommends;
