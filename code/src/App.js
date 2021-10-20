import React from 'react';
//ADD PREVENT DEFAULT?
import Form from './Components/Form';
import Header from 'Components/Header';

export const App = () => {
  return (
    <div className="form-wrapper">
      <Header />
      <Form />
      {/* <Footer /> */}
    </div>
  );
};

//   return (
//     <div>
//       <form>
//         <label htmlFor="nameInput">Type your name: </label>
//         <input
//           id="nameInput"
//           type="text"
//           value={nameInput}
//           onChange={onNameInputChange}
//         />
//         <label htmlFor="surnameInput">Type your surname: </label>
//         <input
//           id="surnameInput"
//           type="text"
//           value={surnameInput}
//           onChange={onSurnameInputChange}
//         />
//       </form>

//       <section>
//         <h2>My values from form: </h2>
//         <p>Name: {nameInput}</p>
//         <p>Surname: {surnameInput}</p>
//       </section>
//     </div>
//   );
// };

// BUTTON
// export const App = () => {
//   const [counter, setCounter] = useState(0);

// return (
//   <div>
//     <div>My counter is: {counter}</div>
//     <button onClick={() => setCounter(counter + 1)}>Click</button>
//   </div>
// );
// }

// export const App = () => {
//   const [nameInput, setNameInput] = useState('');

//   // console.log('My name input: ', nameInput);
//   // god practise to make a function out of onChange
//   const onNameInputChange = (event) => {
//     setNameInput(event.target.value);
//   };

//   return (
//     <div>
//       <form>
//         <label htmlFor="nameInput">Type your name</label>
//         <input
//           id="nameInput"
//           type="text"
//           value={nameInput}
//           onChange={onNameInputChange}
//         />
//       </form>
//     </div>
//   );
// };
