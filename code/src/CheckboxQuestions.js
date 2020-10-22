import React from 'react';



export const CheckboxQuestions = ({ likeOption, setLikeOption }) => {
    const likeBlue = ["Yes", "No", "Only some sorts"];

    return (
        <div>
        <h2 id="group1">Do you like cheese?</h2>
        {likeBlue.map(like => (
          <label key={like}>
            <input
              type="radio"
              name="like"
              value={like}
              onChange={event => setLikeOption(event.target.value)}
              checked={likeOption === like}
              required
            />
            {like}
          </label>
        ))}
        </div> 
    );
}

