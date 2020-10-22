import React from'react';

import 'components/CheckboxCss.css'


export const Checkbox = ({userLikes, onLikesChange}) => {

    return (
        <div>
            <h2 tabindex="0">4. What more do you like?</h2>
            <div className="checkbox-container">
            <label htmlFor="likeKittens">Kittens</label>
            <input
                id="likeKittens"
                type="checkbox"
                checked={userLikes.includes('kittens')}
                onChange={() => onLikesChange('kittens')}
            />
            <span className="checkbox-label"></span>
            <label htmlFor="likeStrawberries">Strawberries</label>
            <input
                id="likeStrawberries"
                type="checkbox"
                checked={userLikes.includes('strawberries')}
                onChange={() => onLikesChange('strawberries')}            />
            <span className="checkbox-label"></span>

            </div>
        </div>
    );
};