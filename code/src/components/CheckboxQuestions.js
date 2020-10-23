import React from 'react';



export const CheckboxQuestions = ({ likeOption, onlikeOptionChange}) => {
    const likeCheese = ["yes", "no thanks", "sometimes"];

    return (
      <div className="checkbox-box">
        <h2>Do you like cheese?</h2>
        {likeCheese.map(like => (
          <label key={like}>
            <input
              type="radio"
              id=""
              name="like"
              value={like}
              onChange={event =>  onlikeOptionChange(event.target.value)}
              checked={likeOption === like}
              // checked="true"
              // required
            />
            {like}
          </label>
        ))}
        </div> 
    );
}

