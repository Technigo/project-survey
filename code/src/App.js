import React from 'react'

import { Form } from 'components/Form'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'


export const App = () => {
	return (
		<>
			<div className='main-content'>
				<Header 
					key={'header'}
					header="Couple exit survey"
				/>
				<div className='form-container'>
					<Form key={'form-container'}/>
				</div>
			</div>
			<Footer key={'footer'}/>
		</>
	)
}











//Legacy


// import React, { useState } from 'react'

// import { Form } from 'components/Form'
// import { Option } from 'components/Option'
// import { Select } from 'components/Select'

// import questions from './questions.json'
// import { handleChange } from 'components/StateHandlers'

// export const App = () => {
//   const [ageValue, setAgeValue] = useState('default');
//   const [city, setCity] = useState('');
//   const [jobTitle, setJobTitle] = useState('');
//   const [worksInSweden, setWorksInSweden] = useState(false)
  


//   // const handleChange = (e) => {
//   //   setSelectMenuValue(e.target.value);
//   // };

//   // prevents page from reload when form is submitted
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(ageValue);
//     console.log(jobTitle);
//     console.log(city);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Select menu with a default value that is hidden */}
//       <div className='select-container'>
//         <select 
//         defaultValue={ageValue} 
//         // onChange={handleChange(selectMenuValue, setSelectMenuValue)}
//         onChange={event => setAgeValue(event.target.value)}
//       >
//         {<option value="default" disabled hidden>Choose age</option>}
//         {questions.age.map((a) =>
//           <Option
//             value = {a}
//           />
//         )}
//         </select>
//       </div>

//       <div>
//         <label>
//           I work in Sweden
//           <input
//             type='checkbox'
//             checked={worksInSweden}
//             onChange={event => setWorksInSweden(event.target.checked)}
//           />
          
//         </label>

//         {worksInSweden && (
//           <div className='radio-container'>
//           City:
//           {questions.city.map((c) => 
//             <label>
//               <input
//                 type='radio'
//                 value={c}
//                 onChange={event => setCity(event.target.value)}
//                 checked={city === c}
//               />
//               {c}
//             </label>
//           )}
//         </div>
//         )}
        
//       </div>

//       {/* <div className='radio-container'>
//         City:
//         {questions.city.map((c) => 
//           <label>
//             <input
//               type='radio'
//               value={c}
//               onChange={event => setCity(event.target.value)}
//               checked={city === c}
//             />
//             {c}
//           </label>
//         )}
//       </div> */}

//       <div className='text-input-container'>
//       <input
//           type='text'
//           onChange={event => setJobTitle(event.target.value)}
//           value={jobTitle}
//       />
//       </div>
      
//       <button>Submit</button>
//     </form>
//   )
//   // return (
//   //   <div>
//   //     <Form 
//   //       select = {<Select />}
//   //       questions = {questions}
//   //     />

//   //     {/* <Form 
//   //       questions={questions}/> */}
//   //   </div>
//   // )
// }
