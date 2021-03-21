import React from "react";
export const InputRooms = (props) => {
  return (
    <div className="each-question">
      <select onChange={props.onRoomChange}>
        <option value="">Select how many rooms you want:</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4+">4+</option>
      </select>
      <button type="submit" className="button">
        Submit
      </button>
    </div>
  );
};
