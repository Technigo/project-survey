import React from 'react';

export const secondSelect = ({ snacks, onChange3, onClickNext}) => {
    return (
        <div className="section" >
            <p>Which snack do you always buy when you're at the cinema?</p>
            <select
                onChange={onChange3}
                value={snacks}
            >
                <option value="">Select here</option>
                <option value="Buttered Popcorn">Buttered Popcorn</option>
                <option value="Bacon crisps">Bacon Crisps</option>
                <option value="Loose candy">Loose candy</option>
                <option value="Chocolate">Chocolate</option>
                <option value="EVERYTHING">EVERYTHING</option>
            </select>
            <button className="button" onClick={onClickNext}>Next</button>
        </div>
    );
};

export default secondSelect
