import React from "react";

const FourthQuestion = ({
  creatureInput,
  onCreatureInputChange,
  onStepChange,
}) => {
  return (
    <div className="fourthQ">
      <img className="bat" src="./icons/bat.svg" alt="bat-svg"></img>
      <h2>What is your favourite supernatural creature? </h2>
      <form className="creature-form">
        <div className="fourth-buttons">
          <label className="creature">
            <input
              type="radio"
              value="vampire"
              onChange={onCreatureInputChange}
              checked={creatureInput === "vampire"}
            />
            vampire
          </label>
          <label className="creature">
            <input
              type="radio"
              value="zombie"
              onChange={onCreatureInputChange}
              checked={creatureInput === "zombie"}
            />
            zombie
          </label>
          <label className="creature">
            <input
              type="radio"
              value="werewolf"
              onChange={onCreatureInputChange}
              checked={creatureInput === "werewolf"}
            />
            werewolf
          </label>
        </div>
        <button className="btn" onClick={onStepChange}>
          SUMMARY
        </button>
      </form>
    </div>
  );
};
export default FourthQuestion;
