import React from "react";
import Form from "./components/Form";

export const App = () => {
  return <Form />;
};

// export const App = () => {
//   // variables for counter
//   // const [counter, setCounter] = useState(0);
//   // const updateCounter = () => {
//   //   setCounter(counter + 1);
//   const [nameInput, setNameInput] = useState("");
//   const [surnameInput, setSurnameInput] = useState("");
//   const [step, setStep] = useState(1);

//   const onNameInputChange = (event) => {
//     setNameInput(event.target.value);
//   };
//   const onSurnameInputChange = (event) => {
//     setSurnameInput(event.target.value);
//   };
//   console.log(nameInput);

//   if (step === 1) {
//     return (
//       <div>
//         <form>
//           <label htmlFor="nameInput">Type your name</label>
//           <input
//             id="nameInput"
//             type="text"
//             value={nameInput}
//             onChange={onNameInputChange}
//           />
//         </form>
//         <button onClick={() => setStep(step + 1)}>Next question</button>
//       </div>
//     );
//   } else if (step === 2) {
//     return (
//       <div>
//         <form>
//           <label htmlFor="surnameInput">Type your surname</label>
//           <input
//             id="surnameInput"
//             type="text"
//             value={surnameInput}
//             onChange={onSurnameInputChange}
//           />
//         </form>
//         <button onClick={() => setStep(step + 1)}>See overwiew</button>
//       </div>
//     );
//   } else if (step === 3) {
//     return (
//       <div>
//         <section>
//           <h2>Your summary:</h2>
//           <p>Name: {nameInput}</p>
//           <p>Surname: {surnameInput}</p>{" "}
//         </section>
//       </div>
//     );
//   }
// };

// return (
//   <div>
//     {/* div for counter */}
//     {/* <div>My count:{counter}</div>
//     <button onClick={updateCounter}>Click</button> */}
//     <form>
//       <label htmlFor="nameInput">Type your text</label>
//       <input
//         id="nameInput"
//         type="text"
//         value={nameInput}
//         onChange={onNameInputChange}
//       />

//       <label htmlFor="surnameInput">Type your text</label>
//       <input
//         id="surnameInput"
//         type="text"
//         value={surnameInput}
//         onChange={onSurnameInputChange}
//       />
//     </form>
//     <section>
//       <h2>Your summary:</h2>
//       <p>Name: {nameInput}</p>
//       <p>Surname: {surnameInput}</p>
//     </section>
//   </div>
// );
// };

// const [nameInput, setnameInput] = useState("");
// const [counter, setCounter] = useState(0);
// return (
//   <div>
//     <div>My counter is:{counter}</div>
//     <button onClick={() => setCounter(counter + 1)}>Click</button>
//   </div>
// );
// return (
//   <div>
//     <form>
//       <label htmlFor="nameInput">Type your name</label>
//       <input
//         id="nameInput"
//         type="text"
//         value={nameInput}
//         onChange={(event) => setNameInput(event.target.value)}
//       />
//     </form>
//   </div>
// );
