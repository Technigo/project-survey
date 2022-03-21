import React from "react";


const RadioButtons = ({intervalGroup, onChangeInterval, onClickNext}) => {
    const intervals = ["2+ times a week", "1-2 times a week", "1-2 times a month", "Never 🙄"];
    return (
        <section className="radiobuttons section">
            <div className="section-child">
                <div className="form">
                    <form>
                        <p>How often do you visit us?</p>
                        {intervals.map((element) => (
                            <label key={element}>
                                <input
                                    className="radio-button-input"
                                    type="radio"
                                    onChange={onChangeInterval}
                                    checked={intervalGroup === element}
                                    value={element}
                                    />
                                {element}
                            </label>
                        ))}
                    </form>
                </div>
                <button className="btn" onClick={onClickNext}>Next</button>
            </div>
        </section>
    );
};

export default RadioButtons;
