import React, { useState } from 'react';

export const BrandQuestion = () => {
    const [brandName, setBrandName] = useState()
    return (
        <form className="brand-question">
            <p>Three headphone brands are you aware of ...</p>
            <input
                type="text"
                onChange={event => setBrandName(event.target.value)}
                value={brandName}
                required
            />
        </form>
    );
};