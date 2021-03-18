import React from 'react';

const SurveyRadio = (props) => {
    const { type, setType } = props;
    

    //const ontypeOfLivingChange = (event) => {
        //console.log(event.target.value);
        //settypeOfLiving(event.target.value);

    return (
        <form className="radio-form">
            Choice of living:
            <label>
                <input className="radio-input"
                id="radio"
                type="radio"
                name="type of living"
                value="house"
                onChange={event => setType(event.target.value)}
                checked = {type === "house"}
                />
                house
            </label>
            <label>
                <input className="radio-input"
                id="radio"
                type="radio"
                name="type of living"
                value="appartment"
                onChange={event => setType(event.target.value)}
                checked = {type === "appartment"}
                />
                appartment
            </label>
        </form>
    )
}
export default SurveyRadio;

