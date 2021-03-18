import React from 'react';

const SurveySelect = (props) => {
    const {buildstyle, setBuildstyle} = props;

    return (
        <form className="select-form">
            <p className="select-form-headline">What is your favourite style?</p>
            <label>
                
            <select 
            name="select"
            id="buildstyle"
            value={buildstyle}
            onChange={event => setBuildstyle(event.target.value)}
            
            >
            <option value="">Select a style</option>
            <option value="Art Nouveau, 1900">Art Nouveau, 1900</option>
            <option value="Swedish Grace, 1920">Swedish Grace, 1920</option>
            <option value="Functionalism, 1930">Functionalism, 1930</option>
            <option value="Welfare State Era, 1940">Welfare State Era, 1940</option>
            <option value="Postmodernism, 1975">Postmodernism, 1975</option>
            <option value="Supermodernism, 2000">Supermodernism, 2000</option>
            </select>
        </label>
        </form>
    )
}
export default SurveySelect;