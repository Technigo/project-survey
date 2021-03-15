import React, { useState } from "react";

export const FormRooms = () => {
  const [room, setRooms] = useState(" ");

  return (
    <div className="each-question">
      <form onSubmit={(event) => event.preventDefault()}>
        <select onChange={(event) => setRooms(event.target.value)} value={room}>
          <option value="">Select how many rooms you want:</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3">4</option>
          <option value="3">5</option>
          <option value="3">6</option>
          <option value="3">7+</option>
        </select>
      </form>
    </div>
  );
};
