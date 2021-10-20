import React, { Component, useState} from "react";
import Form from "components/Form";

export const App = () => {
    return <Form />;
};





// export const App = () => {
//     const [nameInput, setNameInput] = useState('');
//     const [surnameInput, setSurnameInput] = useState('');
//     const [step, setStep] = useState(1);

//     const onNameInputChange = () => {
//         setNameInput(event.target.value)
//     }

//     const onNameInputChange = () => {
//         setSurnameInput(event.target.value)
//     }
//     if  (step === 1){
//     return (
//       <div>
//         <form>
//             <label htmlFor="nameInput">Type your name</label>
//             <input 
//             id="nameInput" 
//             type="text" 
//             value={nameInput} 
//             onChange={(event) => onNameInputChange(event)}
//             />
//         </form>
//         <button onClick={() => setStep(step +1)}>Next question</button>
//         </div>
//         );

        
//      } else if (step === 2) {
//         return (
//             <div>
//         <form>
//             <label htmlFor="surnameInput">Type your surname</label>
//             <input 
//             id="surnameInput" 
//             type="text" 
//             value={surnameInput} 
//             onChange={onSurameInputChange}
//             />
//         </form> 
//         <button onClick={() => setStep(step +1)}>See overview</button>
//         </div>
//         );


//     }else if (step === 3) {
//         return (
//             <section> 
//                 <h1>See my overview</h1>
//                 <p>Name: {nameInput}</p>
//                 <p>Surname: {surnameInput}</p>
//             </section>
//         );
//     }
  



//   export const App = () => {
//   const [counter, setCounter] = useState(0);
// return (
//   <div>
//   <div>My conuter is: { counter }</div>
// <button onClick={() => setCounter(counter +1)}>Click</button>
// </div>
// );
// }


// export const App = () => {
//     const [nameInput, setNameInput] = useState('');
//     return (
//       <div>
//         <form>
//             <label htmlFor="nameInput">Type your name</label>
//             <input 
//             id="nameInput" 
//             type="text" 
//             value={nameInput} 
//             onChange={(event) => setNameInput(event.target.value)}
//             />
//         </form>
//       </div>
//     );
//   }
  