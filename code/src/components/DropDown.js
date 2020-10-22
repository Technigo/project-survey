import React from 'react';

export const DropDown = ({ brand, setBrand }) => {
    return (
        <div className="drop-down">
            <h2 tabIndex='0'>What brand do you use at the moment?</h2>
            <select
                onChange={event => setBrand(event.target.value)}
                value={brand}
                required
            >
                <option value="">Choose brand</option>
                <option value="Beats">Beats by Dre</option>
                <option value="Bose">Bose</option>
                <option value="AKG">AKG</option>
                <option value="UrbanEar">UrbanEar</option>
                <option value="JBL">JBL</option>
                <option value="Sony">Sony</option>
                <option value="Apple Airpods">Apple Airpods</option>
                <option value="some other">Other</option>
            </select>
        </div>

    );
};