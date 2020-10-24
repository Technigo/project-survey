import React from 'react';



export const RadioBtnOption = ({ likeOption, onlikeOptionChange}) => {
    const likeCheese = ["yes", "no thanks", "sometimes"];

    return (
      <div className="radiobtn-box">
        <h2>Do you like cheese?</h2>
        {likeCheese.map(like => (
          <label key={like} tabIndex="0">
            <input
              type="radio"
              id={like}
              name="like"
              value={like}
              onChange={(event) =>  onlikeOptionChange(event.target.value)}
              checked={likeOption === like}
              // required
            />
            {like}
          </label>
        ))}
        </div> 
    );
}

