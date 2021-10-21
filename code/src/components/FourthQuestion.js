import React from "react";

const FourthQuestion = ({
  creatureInput,
  onCreatureInputChange,
  onStepChange,
}) => {
  console.log(creatureInput);
  return (
    <>
      <h2>What is your favourite supernatural creature? </h2>
      <form>
        <label>
          <input
            type="radio"
            value="vampire"
            onChange={onCreatureInputChange}
            checked={creatureInput === "vampire"}
          />
          vampire
        </label>
        <label>
          <input
            type="radio"
            value="zombie"
            onChange={onCreatureInputChange}
            checked={creatureInput === "zombie"}
          />
          zombie
          <input
            type="radio"
            value="werewolf"
            onChange={onCreatureInputChange}
            checked={creatureInput === "werewolf"}
          />
          werewolf
        </label>
        <button className="btn" onClick={onStepChange}>
          Overview
          <span role="img" aria-label="pumpkin">
            🎃
          </span>
        </button>
      </form>
    </>
  );
};
export default FourthQuestion;

// const creatureGroup = ["vampire", "zombie", "werewolf"];

// const FourthQuestion = () => {
//   const [creatureGroup, setCreatureGroup] = useState();
//   return (
//     <form>
//       Creature:
//       {creatureGroup.map((group) => (
//         <label key={group}>
//           <input
//             type="radio"
//             value={group}
//             onChange={(event) => setCreatureGroup(event.target.value)}
//             checked={creatureGroup === group}
//           />
//           {/* <button onClick={onStepChange}>Next question</button> */}
//         </label>
//       ))}
//     </form>
//   );
// };

// export default FourthQuestion;
