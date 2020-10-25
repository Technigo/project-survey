import React from "react";

const styles = ["Kickboxing", "MMA", "BJJ", "Boxing"];

const Question3 = ({ training, onTrainingChange }) => {
  return (
    <div className="Question-3">
      <form>
        {styles.map((style) => (
          <label key={style} className="radio-btn" tabIndex="0">
            <input
              type="radio"
              name="radio"
              value={style}
              onChange={onTrainingChange}
              checked={training === styles}
              id={style}
              className="radio"
              required
            />

            {style}
          </label>
        ))}
      </form>
    </div>
  );
};

//     <>
//       <section>
//         <div className="question-3">
//           <div>
//             <label htmlFor="trainingKickboxing">Kickboxing</label>
//             <input
//               id="trainingKickboxing"
//               type="radio"
//               checked={training.includes("Kickboxing")}
//               onChange={() => onTrainingChange("Kickboxing")}
//             />
//           </div>
//           <div>
//             <label htmlFor="trainingMma">MMA</label>
//             <input
//               id="trainingMma"
//               type="radio"
//               checked={training.includes("MMA")}
//               onChange={() => onTrainingChange("MMA")}
//             />
//           </div>
//           <div>
//             <label htmlFor="trainingBjj">BJJ</label>
//             <input
//               id="trainingBjj"
//               type="radio"
//               checked={training.includes("BJJ")}
//               onChange={() => onTrainingChange("BJJ")}
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

export default Question3;
