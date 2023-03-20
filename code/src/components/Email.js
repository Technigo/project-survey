/* eslint-disable indent */
import React from 'react';

const Email = ({ nextPlease, emailBtn, setEmailBtn }) => {
    return (
        <div className="flex flex-col gap-20">
            <p>Leave us your email address for more surveys</p>
            <input type="email" onChange={(event) => setEmailBtn(event.target.value)} value={emailBtn} />
            <div className="btnSection">
                <button className="button" type="button" onClick={nextPlease} value={emailBtn}>Submit</button>
            </div>
        </div>
    )
}

export default Email