import React from "react";

const FourthQuestion = ({ handInTime, onHandInTimeChange, onStepChange }) => {
  return (
    <form>
      <label htmlFor="thirdQuestion">
        When do you hand in your weekly project?{" "}
      </label>
      <input
        type="radio"
        value="time"
        onChange={() => onHandInTimeChange("time")}
        checked={handInTime === "time"}
      />
      <span role="img" aria-label="images">
        😃
      </span>

      <button onClick={onStepChange}>Next Question</button>
    </form>
  );
};

// const handInTimes = [
//     "Some time during you weekend",
//     "Sunday night sometime between 23:30-00:00",
//     "Early in the week (Friday included)",
//     "After deadline",
//   ];

//   export const App = () => {
//     const [handInTime, setHandInTime] = useState(false);
//     return (
//       <form>
//         When do you hand in your weekly project?
//         {handInTimes.map((time) => (
//           <label key={time}>
//             <input
//               type="radio"
//               value={time}
//               onChange={(event) => setHandInTime(event.target.value)}
//               checked={handInTime === time}
//             />
//             {time}
//           </label>
//         ))}
//       </form>

//     );
//   };

export default FourthQuestion;
