import React from 'react';

const SurveySelect = (props) => {
    const {style, setStyle} = props;

    return (
        <form className="select-form">
            <select 
            id="style"
            onChange={event => setStyle(event.target.value)}
            value={style}
            
            >
            <option value="">Select a style</option>
            <option value="funkis">Funkis</option>
            <option value="sekelskifte">Sekelskifte</option>
            <option value="newbuilt">Newbuilt</option>
            <option value="sixties">Sixties</option>
            <option value="architect">Architect</option>
            </select>

        </form>
    )
}
export default SurveySelect;