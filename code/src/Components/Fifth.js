import React from "react";

const Fifth = ({ QuestionAlternative, setAlternative }) => {
  return (
    <>
      <div className="title">
        <label className="label">Schedul the To do:</label>
      </div>

      <div className="contentSelect">
        <input
          type="time"
          value={QuestionAlternative}
          onChange={(e) => setAlternative(e.target.value)}
        />
      </div>
    </>
  );
};

export default Fifth;
