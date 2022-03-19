import React from "react";

const options = [
  "Some time during you weekend",
  "Sunday night sometime between 23:30-00:00",
  "Early in the week (Friday included)",
  "Maybe in time or could be after deadline",
];

const FourthQuestion = ({ handInTime, onHandInTimeChange, onStepChange }) => {
  return (
    <section className="form-container">
      <h2>When do you hand in your weekly project?</h2>
      <div className="img-wrapper--images">
        {options.map((option) => {
          return (
            <label
              className="description radio-img hand-in"
              htmlFor={option}
              key={option}
            >
              <div className="option">
                <input
                  type="radio"
                  name="handInTime"
                  value={option}
                  checked={handInTime === option}
                  // id={option}
                  onChange={onHandInTimeChange}
                  // className="relate"
                />
              </div>
              {option}
            </label>
          );
        })}
      </div>

      <button onClick={onStepChange}>Next Question</button>
    </section>
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
