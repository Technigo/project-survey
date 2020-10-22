import React from 'react';



export const CheckboxQuestions = ({ likeOption, onlikeOptionChange}) => {
    const likeCheese = ["Yes", "No", "Only some sorts"];

    return (
      <div className="checkbox-box">
        <h2>Do you like cheese?</h2>
        {likeCheese.map(like => (
          <label key={like}>
            <input
              type="radio"
              name="like"
              value={like}
              onChange={event =>  onlikeOptionChange(event.target.value)}
              checked={likeOption === like}
              // required
            />
            {like}
          </label>
        ))}
        </div> 
    );
}

