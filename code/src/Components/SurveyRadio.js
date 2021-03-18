import React from 'react';

const SurveyRadio = (props) => {
    const { type, setType } = props;
    

    //const ontypeOfLivingChange = (event) => {
        //console.log(event.target.value);
        //settypeOfLiving(event.target.value);

    return (
        <form className="radio-form" >
            <p className="radio-form-headline">How would you prefer to live?</p>
            
            <label>
                <input className="radio-input"
                id="radio"
                type="radio"
                name="type of living"
                value="house"
                onChange={event => setType(event.target.value)}
                checked = {type === "house"}
                
                
                />
                House
            </label>
            <label>
                <input className="radio-input"
                id="radio"
                type="radio"
                name="type of living"
                value="apartment"
                onChange={event => setType(event.target.value)}
                checked = {type === "apartment"}
                />
                Apartment
            </label>
            <label>
                <input className="radio-input"
                id="radio"
                type="radio"
                name="type of living"
                value="collective"
                onChange={event => setType(event.target.value)}
                checked = {type === "collective"}
                />
                Collective
            </label>
            <label>
                <input className="radio-input"
                id="radio"
                type="radio"
                name="type of living"
                value="camper"
                onChange={event => setType(event.target.value)}
                checked = {type === "camper"}
                />
                Camper
            </label>
        </form>
    )
}
export default SurveyRadio;

