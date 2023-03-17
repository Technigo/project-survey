/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';

const CheckboxQuestion = ({ nextPlease, checkboxBtn, setCheckboxBtn }) => {
    return (

        <form className="checkboxSection">
            Do you eat fast food?
            <label>
                Yes
                <input type="checkbox" checked={checkboxBtn} onChange={(event) => setCheckboxBtn(event.target.checked)} />

            </label>
            <div className="btnSection">
                <button className="button" type="button" onClick={nextPlease}>Next question</button>
            </div>
        </form>
    )
}

export default CheckboxQuestion