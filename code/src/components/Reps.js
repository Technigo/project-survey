import React from 'react'

export const Reps = ({ reps, setReps }) => {
  return (
    <form>
      <select
        className="reps"
        onChange={(event) => setReps(event.target.value)}
        value={reps}>
        <option value="" disabled> </option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
      </select>
    </form>
  );
};

export default Reps
