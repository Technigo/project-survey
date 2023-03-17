/* eslint-disable indent */
import React from 'react';

const NamePage = ({ nextPlease, nameInput, setNameInput }) => {
    return (
        <div className="flex flex-col gap-20"> {/* Name form */}
            <div className="question">
                <p>What is your name</p>
                <input type="text" onChange={(event) => setNameInput(event.target.value)} value={nameInput} />
            </div>
            <div className="btnSection">
                <button className="button" type="button" onClick={nextPlease}>Start the survey</button>
            </div>
        </div>
    )
}

export default NamePage