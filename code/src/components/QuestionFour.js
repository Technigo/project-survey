import React from "react";

// const ageGroups = ["18-25", "25-35", "35-45", ">45"];

// const QuestionFour = (props) => {
//   const { group, handleFourtInputChange } = props;
//   return (
//     <div>
//       <h1>
//         choose your agegroupe and get the oportunity to meet other gardening
//         entusiasts in your age
//       </h1>
//       <form>
//         Answer:
//         {ageGroups.map((ageGroup) => (
//           <label key={ageGroup}>
//             <input
//               type="radio"
//               value={ageGroup}
//               checked={ageGroup === group}
//               onChange={handleFourtInputChange}
//             />
//             {ageGroup}
//           </label>
//         ))}
//       </form>
//     </div>
//   );
// };

// export default QuestionFour;
const ageGroups = ["18-25", "25-35", "35-45", ">45"];
const QuestionFour = (props) => {
  const { group, handleFourthInputChange } = props;
  return (
    <div>
      <h1>
        {" "}
        choose your agegroupe and get the oportunity to meet other gardening
        entusiasts in your age
      </h1>
      <form>
        Answer:
        {ageGroups.map((ageGroup) => (
          <label key={ageGroup}>
            <input
              type="radio"
              value={ageGroup}
              checked={ageGroup === group}
              onChange={handleFourthInputChange}
            />
            {ageGroup}
          </label>
        ))}
      </form>
    </div>
  );
};
export default QuestionFour;
