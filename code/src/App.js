import React, { useState } from 'react';
import { Gender } from './Gender';
import { Frequency } from './Frequency';
import { Actions } from './Actions';
import { Summary } from './Summary';
import Suggestions from './Suggestions';

export const App = () => {
  const [gender, setGender] = useState('');
  const [frequency, setFrequency] = useState();
  const [action1, setAction1] = useState('');
  const [action2, setAction2] = useState('');
  const [suggestion, setSuggestion] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
    setShowForm(false);
  };

  return (
    <main>
      {showSummary && (
        <Summary
          gender={gender}
          frequency={frequency}
          action1={action1}
          action2={action2}
          suggestion={suggestion}
        />
      )}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <h1>Feeling stressed?</h1>
          <Gender setGender={setGender} gender={gender} />
          <Frequency setFrequency={setFrequency} frequency={frequency} />
          <Actions
            setAction1={setAction1}
            setAction2={setAction2}
            action1={action1}
            action2={action2}
          />
          <Suggestions setSuggestion={setSuggestion} suggestion={suggestion} />
          <button type='submit' style={{ display: 'block' }}>
            SUBMIT
          </button>
        </form>
      )}
    </main>
  );
};

export default App;

// GENDER

// const Gender = () => {
//   const [gender, setGender] = useState('gender');
//   return (
//     <form onSubmit={event => event.preventDefault()}>
//       What's your gender:
//       <select onChange={event => setGender(event.target.value)} value={gender}>
//         <option value=''>Select </option>
//         <option value='female'>Female</option>
//         <option value='male'>Male</option>
//         <option value='neutral'>Neutral</option>
//       </select>
//     </form>
//   );
// };

// // FREQUENCY
// const occasions = ['every day', 'several times a week', 'once a week or less'];

// const Frequency = () => {
//   const [frequency, setFrequency] = useState('frequency');
//   return (
//     <form onSubmit={event => event.preventDefault()}>
//       How often do you feel stressed?
//       {occasions.map(occasion => (
//         <label key={occasion}>
//           <input
//             type='radio'
//             value={occasion}
//             onChange={event => setFrequency(event.target.value)}
//             checked={frequency === occasion}
//           />
//           {occasion}
//         </label>
//       ))}
//     </form>
//   );
// };

// // ACTIONS

// const Actions = () => {
//   const [action1, setAction1] = useState('action1');
//   const [action2, setAction2] = useState('action2');
//   return (
//     <form onSubmit={event => event.preventDefault()}>
//       Name two things you normally do in order to try to feel better?
//       <label>
//         1:
//         <input
//           type='text'
//           onChange={event => setAction1(event.target.value)}
//           value={action1}
//         />
//       </label>
//       <label>
//         2:
//         <input
//           type='text'
//           onChange={event => setAction2(event.target.value)}
//           value={action2}
//         />
//       </label>
//     </form>
//   );
// };

// // SUGGESTIONS

// const Suggestions = () => {
//   const [suggestion, setSuggestion] = useState(false);

//   return (
//     <form onSubmit={event => event.preventDefault()}>
//       <label>
//         Would you like some suggestions of what you can do to feel better?
//         <input
//           type='checkbox'
//           checked={suggestion}
//           onChange={event => setSuggestion(event.target.checked)}
//         />
//       </label>
//     </form>
//   );
// };

// export const App = () => {
//   return (
//     <form>
//       <div className='form'>
//         <Gender />
//         <Frequency />
//         <Actions />
//         <Suggestions />
//         <Summary />
//       </div>
//     </form>
//   );
// };

// export default App;
