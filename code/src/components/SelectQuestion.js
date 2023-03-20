/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const SelectQuestion = ({ nextPlease, selectBtn, setSelectBtn }) => {
    return (
        <div className="selectSection">
            <p>How often do you cook at home?</p>
            <select onChange={(event) => setSelectBtn(event.target.value)} value={selectBtn}>
                <option value="select" disabled selected>Select option</option>
                <option value="Never">Never</option>
                <option value="Rarely">Rarely</option>
                <option value="A few times a month">A few times a month</option>
                <option value="Once a week">Once a week</option>
                <option value="Multiple times a week">Multiple times a week</option>
                <option value="Every day">Every day</option>
            </select>
            <div className="btnSection">
                <button className="button" type="button" onClick={nextPlease}>Next question</button>
            </div>
        </div>
    )
}

export default SelectQuestion