/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const RadioQuestion = ({ nextPlease, radioBtn, setRadioBtn }) => {
    return (
        <div className="gap-20">
            <p>How often do you eat out at restaurants?</p>
            <div className="flex flex-col">
                <label>
                    <input
                        type="radio"
                        value="Never"
                        checked={radioBtn === 'Never'}
                        onChange={(event) => setRadioBtn(event.target.value)} />
                    Never
                </label>
                <label>
                    <input
                        type="radio"
                        value="Once a month"
                        checked={radioBtn === 'Once a month'}
                        onChange={(event) => setRadioBtn(event.target.value)} />
                    Once a month
                </label>
                <label>
                    <input
                        type="radio"
                        value="Once a week"
                        checked={radioBtn === 'Once a week'}
                        onChange={(event) => setRadioBtn(event.target.value)} />
                    Once a week
                </label>
                <label>
                    <input
                        type="radio"
                        value="Multiple times a week"
                        checked={radioBtn === 'Multiple times a week'}
                        onChange={(event) => setRadioBtn(event.target.value)} />
                    Multiple times a week
                </label>
                <label>
                    <input
                        type="radio"
                        value="Every day"
                        checked={radioBtn === 'Every day'}
                        onChange={(event) => setRadioBtn(event.target.value)} />
                    Every day
                </label>
            </div>
            <div className="btnSection">
                <button className="button" type="button" onClick={nextPlease}>Next question</button>
            </div>
        </div>
    )
}

export default RadioQuestion