import React from 'react';

export const secondSelect = ({ snacks, onChange3}) => {
    return (
        <div className="section" >
            <p>Which snack do you always buy when you're at the cinema?</p>
            <select
                onChange={onChange3}
                value={snacks}
            >
                <option value="">Select here</option>
                <option value="Popcorn with butter"></option>
                <option value="Bacon crisps"><PUT SNACKS IN HERE/option>
                <option value="Loose candy"></option>
                <option value="Chocolate"></option>
                <option value="EVERYTHING"></option>
            </select>
        </div>
    );
};

export default secondSelect
