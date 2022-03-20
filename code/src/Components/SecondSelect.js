import React from 'react';


export const secondSelect = ({ snacks, onChangeSnack, onClickNext}) => {
    return (
        <section className="select section">
            <div className="section-child">
                <p>Which snack do you always buy when you're at the cinema?</p>
                <select onChange={onChangeSnack} value={snacks}>
                    <option value="">Select here</option>
                    <option value="Buttered Popcorn">Buttered Popcorn</option>
                    <option value="Bacon crisps">Bacon Crisps</option>
                    <option value="Loose candy">Loose candy</option>
                    <option value="Chocolate">Chocolate</option>
                    <option value="EVERYTHING">EVERYTHING</option>
                </select>
                <button className="summary-button" onClick={onClickNext}>Show Summary</button>
            </div>
        </section>
        
    );
};

export default secondSelect;
