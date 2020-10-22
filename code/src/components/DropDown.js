import React, { useState } from 'react';

export const DropDown = () => {
    const [brand, setBrand] = useState();

    return (
        <form className="drop-down">
            <h2 tabIndex='0'>What brand do you use at the moment...</h2>
            <select
                onChange={event => setBrand(event.target.value)}
                value={brand}
            >
                <option value="">Choose brand</option>
                <option value="beats">Beats by Dre</option>
                <option value="bose">Bose</option>
                <option value="akg">AKG</option>
                <option value="urbanear">UrbanEar</option>
                <option value="jbl">JBL</option>
                <option value="Sony">Sony</option>
                <option value="airpods">Apple Airpods</option>
                <option value="other">Other</option>
            </select>
        </form>

    );
};